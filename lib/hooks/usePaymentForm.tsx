import { useEffect, useState } from "react";
import { number as cardNumber, expirationDate, cvv } from "card-validator";

import {
  formatCVV,
  formatCardNumber,
  formatExpiryDate,
} from "../utils/payment";
import { CreditCard } from "@/types/models";

type TPaymentErrors = Record<keyof Omit<CreditCard, "cardType">, string | null>;

const usePayment = () => {
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [formattedExpiryDate, setFormattedExpiryDate] = useState("");
  const [formattedCVV, setFormattedCVV] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardType, setCardType] = useState<string | undefined>("");
  const [errors, setErrors] = useState<TPaymentErrors>({
    cardNumber: null,
    cvv: null,
    expiryDate: null,
    cardHolderName: null,
  });

  const handleSubmit = () => {
    let validateErrors: TPaymentErrors = {
      cardNumber: null,
      cvv: null,
      expiryDate: null,
      cardHolderName: null,
    };

    // validate card number
    if (!cardNumber(formattedCardNumber).isValid) {
      validateErrors = {
        ...validateErrors,
        cardNumber: "Card number is not valid",
      };
    }

    if (!formattedCardNumber.length) {
      validateErrors = {
        ...validateErrors,
        cardNumber: "Card number is required",
      };
    }

    // validate expiry date
    if (!expirationDate(formattedExpiryDate).isValid) {
      validateErrors = {
        ...validateErrors,
        expiryDate: "Expiry date is not valid",
      };
    }

    if (!formattedExpiryDate.length) {
      validateErrors = {
        ...validateErrors,
        expiryDate: "Expiry date is required",
      };
    }

    // validate cvv
    if (!cvv(formattedCVV).isValid) {
      validateErrors = { ...validateErrors, cvv: "CVV is required" };
    }

    if (!formattedCVV.length) {
      validateErrors = { ...validateErrors, cvv: "CVV is required" };
    }

    // validate card holder name
    if (cardHolderName.length < 5) {
      validateErrors = {
        ...validateErrors,
        cardHolderName: "Card holder name must be at least 5 characters long",
      };
    }

    if (!cardHolderName.length) {
      validateErrors = {
        ...validateErrors,
        cardHolderName: "Card holder name is required",
      };
    }

    setErrors(validateErrors);

    if (Object.values(validateErrors).some(error => error)) return null;

    let data = {
      cardNumber: formattedCardNumber,
      expiryDate: formattedExpiryDate,
      cvv: formattedCVV,
      cardHolderName,
      cardType,
    };

    // resetState();

    return data;
  };

  const handleCardHolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.value;

    const alphabeticValue = name.replace(/[^a-zA-Z\s]/g, "");

    // if (name.length < 5)
    //   setErrors({ ...errors, name: "Name must be at least 5 characters long" });
    if (!alphabeticValue.length)
      setErrors({ ...errors, cardHolderName: "Card holder name is required" });
    else setErrors({ ...errors, cardHolderName: null });

    setCardHolderName(alphabeticValue);
  };

  const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCVV = event.target.value;

    const numericValue = inputCVV.replace(/[^0-9]/g, "");

    const formattedCVV = formatCVV(numericValue);

    setFormattedCVV(formattedCVV);

    if (!cvv(formattedCVV).isValid)
      setErrors({ ...errors, cvv: "CVV is not valid" });
    else setErrors({ ...errors, cvv: null });
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputExpiryDate = event.target.value;

    const numericValue = inputExpiryDate.replace(/[^0-9]/g, "");

    const formattedDate = formatExpiryDate(numericValue);
    setFormattedExpiryDate(formattedDate);

    if (!expirationDate(numericValue).isValid)
      setErrors({ ...errors, expiryDate: "Expiry date is not valid" });
    else setErrors({ ...errors, expiryDate: null });
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    const inputCardNumber = value.replace(/\s/g, ""); // Remove existing spaces
    const cardType = cardNumber(inputCardNumber).card?.type;
    const formattedNumber = formatCardNumber(inputCardNumber, cardType);

    setCardType(cardType);
    setFormattedCardNumber(formattedNumber);

    if (!cardNumber(inputCardNumber).isValid)
      setErrors({ ...errors, cardNumber: "Card number is not valid" });
    else setErrors({ ...errors, cardNumber: null });
  };

  const resetState = () => {
    setCardType("");
    setFormattedCardNumber("");
    setFormattedExpiryDate("");
    setFormattedCVV("");
    setCardHolderName("");
  };

  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  return {
    handleSubmit,
    formattedCardNumber,
    formattedExpiryDate,
    formattedCVV,
    cardHolderName,
    cardType,
    errors,
    handleCardHolderNameChange,
    handleCVVChange,
    handleExpiryDateChange,
    handleCardNumberChange,
  };
};

export default usePayment;
