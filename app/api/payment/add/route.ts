import { CreditCard } from "@/types/models";
import paypal from "paypal-rest-sdk";

import { NextRequest } from "next/server";
import { convertToFourDigitYear } from "../../utils/date";
import { _createPay } from "../../utils/paypal";

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Awaited<CreditCard>;

    const { cardHolderName, cardNumber, cvv, expiryDate, cardType } = body;

    if (!cardHolderName || !cardNumber || !cvv || !expiryDate) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const paymentData = {
      intent: "sale",
      payer: {
        payment_method: "credit_card",
        funding_instruments: [
          {
            credit_card: {
              type: cardType,
              number: cardNumber.replace(/\s/g, ""),
              expire_month: expiryDate.split("/")[0],
              expire_year: convertToFourDigitYear(expiryDate.split("/")[1]),
              cvv2: cvv,
              first_name: cardHolderName.split(" ")[0],
              last_name: cardHolderName.split(" ")[1],
              billing_address: {
                line1: "123 Main St",
                city: "City",
                state: "State",
                postal_code: "12345",
                country_code: "US",
              },
            },
          },
        ],
      },
      transactions: [
        {
          amount: {
            total: "10.00", // Replace with the actual amount
            currency: "USD",
          },
          description: "Test payment",
        },
      ],
      payee: {
        email: "payee@example.com", // Replace with the actual payee email
      },
    };

    await _createPay(paymentData);

    return Response.json(
      { success: true, message: "Payment added successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        message: error.response.message || "Something went wrong",
      },
      { status: error.httpStatusCode || 500 }
    );
  }
}
