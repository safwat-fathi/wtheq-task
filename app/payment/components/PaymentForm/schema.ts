import * as yup from "yup";
import { number as cardNumber, expirationDate, cvv } from "card-validator";
import { CreditCardFormData } from "./types";

const paymentSchema: yup.ObjectSchema<CreditCardFormData> = yup.object().shape({
  cardNumber: yup
    .string()
    .test(
      "valid-card-number",
      "Invalid card number",
      value => cardNumber(value).isValid
    )
    .required("Card number is required"),
  expiryDate: yup
    .string()
    .test(
      "valid-expiry-date",
      "Invalid expiry date",
      value => expirationDate(value).isValid
    )
    .required("Expiry date is required"),
  cardHolderName: yup
    .string()
    .required("Card holder name is required")
    .min(4, "Card holder name seems to be invalid"),
  cvv: yup
    .string()
    .test("valid-cvv", "Invalid CVV", value => cvv(value).isValid)
    .required("CVV is required"),
});

export default paymentSchema;
