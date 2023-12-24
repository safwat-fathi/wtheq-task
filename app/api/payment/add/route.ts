import { CreditCard } from "@/types/models";

import { NextRequest } from "next/server";
import { convertToFourDigitYear } from "@/lib/utils/date";
import paypalService from "@/services/paypal.service";
import { SDKError } from "paypal-rest-sdk";

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

    const payment = await paypalService.createPay(paymentData);

    return Response.json(
      { success: true, message: "Payment success", data: payment },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        message: (error as SDKError).response.message || "Something went wrong",
      },
      { status: (error as SDKError).httpStatusCode || 500 }
    );
  }
}
