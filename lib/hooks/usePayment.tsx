import { useEffect, useState } from "react";
import { number as cardNumber, expirationDate, cvv } from "card-validator";

import {
  formatCVV,
  formatCardNumber,
  formatExpiryDate,
} from "../utils/payment";

type TPaymentErrors = Record<
  "name" | "cardNum" | "date" | "cvv",
  string | null
>;

const usePayment = () => {
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [formattedExpiryDate, setFormattedExpiryDate] = useState("");
  const [formattedCVV, setFormattedCVV] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardType, setCardType] = useState<string | undefined>("");
  const [errors, setErrors] = useState<TPaymentErrors>({
    cardNum: null,
    cvv: null,
    date: null,
    name: null,
  });

  const handleSubmit = () => {
    let validateErrors: TPaymentErrors = {
      cardNum: null,
      cvv: null,
      date: null,
      name: null,
    };

    // validate card number
    if (!cardNumber(formattedCardNumber).isValid) {
      validateErrors = {
        ...validateErrors,
        cardNum: "Card number is not valid",
      };
    }

    if (!formattedCardNumber.length) {
      validateErrors = {
        ...validateErrors,
        cardNum: "Card number is required",
      };
    }

    // validate expiry date
    if (!expirationDate(formattedExpiryDate).isValid) {
      validateErrors = { ...validateErrors, date: "Expiry date is not valid" };
    }

    if (!formattedExpiryDate.length) {
      validateErrors = { ...validateErrors, date: "Expiry date is required" };
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
        name: "Card holder name must be at least 5 characters long",
      };
    }

    if (!cardHolderName.length) {
      validateErrors = {
        ...validateErrors,
        name: "Card holder name is required",
      };
    }

    setErrors(validateErrors);
  };

  const handleCardHolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.value;

    // if (name.length < 5)
    //   setErrors({ ...errors, name: "Name must be at least 5 characters long" });
    if (!name.length) setErrors({ ...errors, name: "Name is required" });
    else setErrors({ ...errors, name: null });

    setCardHolderName(name);
  };

  const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCVV = event.target.value;
    const formattedCVV = formatCVV(inputCVV);

    setFormattedCVV(formattedCVV);

    if (!cvv(formattedCVV).isValid)
      setErrors({ ...errors, cvv: "CVV is required" });
    else setErrors({ ...errors, cvv: null });
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputExpiryDate = event.target.value;
    const formattedDate = formatExpiryDate(inputExpiryDate);
    setFormattedExpiryDate(formattedDate);

    if (!expirationDate(inputExpiryDate).isValid)
      setErrors({ ...errors, date: "Expiry date is not valid" });
    else setErrors({ ...errors, date: null });
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
      setErrors({ ...errors, cardNum: "Card number is not valid" });
    else setErrors({ ...errors, cardNum: null });
  };

  useEffect(() => {
    return () => {
      setCardHolderName("");
      setCardType("");
      setFormattedCVV("");
      setFormattedCardNumber("");
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
