import { useEffect, useState } from "react";
import { number as cardNumber } from "card-validator";

const usePayment = () => {
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [formattedExpiryDate, setFormattedExpiryDate] = useState("");
  const [formattedCVV, setFormattedCVV] = useState("");

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
    setFormattedCardNumber(formattedNumber);
  };

  useEffect(() => {
    // Clear the formatted card number on unmounts
    return () => setFormattedCardNumber("");
  }, []);

  return {
    formattedCardNumber,
    formattedExpiryDate,
    formattedCVV,
    handleCVVChange,
    handleExpiryDateChange,
    handleCardNumberChange,
  };
};

export default usePayment;
