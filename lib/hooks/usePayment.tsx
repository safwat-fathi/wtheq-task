import { useEffect, useState } from "react";
import { number as cardNumber } from "card-validator";

import {
  formatCVV,
  formatCardNumber,
  formatExpiryDate,
} from "../utils/payment";

const usePayment = () => {
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [formattedExpiryDate, setFormattedExpiryDate] = useState("");
  const [formattedCVV, setFormattedCVV] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardType, setCardType] = useState<string | undefined>("");
  const [errors, setErrors] = useState<
    Record<"name" | "cardNum" | "date" | "cvv", string | null>
  >({ cardNum: null, cvv: null, date: null, name: null });

  const handleCardHolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.value;
    setCardHolderName(name);
  };

  const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCVV = event.target.value;
    const formattedCVV = formatCVV(inputCVV);

    setFormattedCVV(formattedCVV);
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputExpiryDate = event.target.value;
    const formattedDate = formatExpiryDate(inputExpiryDate);
    setFormattedExpiryDate(formattedDate);
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputCardNumber = event.target.value.replace(/\s/g, ""); // Remove existing spaces
    const cardType = cardNumber(inputCardNumber).card?.type;
    const formattedNumber = formatCardNumber(inputCardNumber, cardType);

    // setCardType(cardType ?? "" as "visa" | "mastercard" | "amex" | "dinersclub" | "discover" | "jcb" | "unionpay" | "unknown" | "")
    setCardType(cardType);
    setFormattedCardNumber(formattedNumber);
  };

  useEffect(() => {
    return () => {
      setCardHolderName("");
      setCardType("");
      setFormattedCVV("");
      setFormattedCardNumber("");
    };
  }, []);

  useEffect(() => {
    // if (!formattedCardNumber.length) {
    //   setErrors({ ...errors, cardNum: "Card number is required" });
    // }

    if (!cardNumber(formattedCardNumber).isValid) {
      setErrors({ ...errors, cardNum: "Card number is not valid" });
    }
  }, [formatCardNumber]);

  return {
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
