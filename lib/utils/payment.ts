const formatExpiryDate = (expiryDate: string): string => {
  const cleanedExpiryDate = expiryDate.replace(/[^0-9]/g, "");
  const formattedExpiryDate = cleanedExpiryDate
    .slice(0, 4)
    .replace(/(\d{2})(\d{2})/, "$1/$2")
    .trim();

  return formattedExpiryDate;
};

const formatCVV = (cvv: string): string => {
  const cleanedCVV = cvv.replace(/[^0-9]/g, "");
  return cleanedCVV;
};

const formatCardNumber = (
  cardNumber: string,
  cardType: string | undefined
): string => {
  if (!cardType) {
    return cardNumber; // Return as-is if card type is not detected
  }

  const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, "");
  const gaps = getGapsForCardType(cardType);

  return cardNumberWithoutSpaces
    .split("")
    .map((char, index) => (gaps.includes(index) ? ` ${char}` : char))
    .join("");
};

const getGapsForCardType = (cardType: string): number[] => {
  // Define the positions of gaps based on the card type
  if (cardType === "mastercard" || cardType === "visa") {
    return [4, 9, 14];
  }
  // Add more conditions for other card types if needed

  // Default to a generic pattern if the card type is not recognized
  return [4, 9, 14];
};
