"use client";

import Button from "@/lib/ui/components/Button";
import usePayment from "@/lib/hooks/usePayment";
import { CreditCardType } from "@/types/hooks/i-use-payment";
import InputField from "@/lib/ui/components/InputField";

const renderCardType = (cardType: string | undefined) => {
  switch (cardType) {
    case CreditCardType.Visa:
      return "Visa";
    case CreditCardType.Mastercard:
      return "Mastercard";
    case CreditCardType.AmericanExpress:
      return "American Express";
    default:
      return "Unknown";
  }
};

const PaymentForm = () => {
  const {
    handleSubmit,
    errors,
    cardType,
    cardHolderName,
    formattedCVV,
    formattedExpiryDate,
    formattedCardNumber,
    handleCardNumberChange,
    handleCVVChange,
    handleExpiryDateChange,
    handleCardHolderNameChange,
  } = usePayment();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex gap-4 flex-col"
    >
      <div>{renderCardType(cardType)}</div>

      <InputField
        required
        name="cardNum"
        onChange={handleCardNumberChange}
        value={formattedCardNumber}
        placeholder="Card Number"
        errors={errors}
      />

      <div>
        <InputField
          required
          name="date"
          onChange={handleExpiryDateChange}
          value={formattedExpiryDate}
          errors={errors}
          placeholder="Expiry Date"
        />
      </div>

      <div>
        <InputField
          required
          name="cvv"
          errors={errors}
          placeholder="CVV"
          onChange={handleCVVChange}
          value={formattedCVV}
        />
      </div>

      <div>
        <InputField
          required
          name="name"
          onChange={handleCardHolderNameChange}
          value={cardHolderName}
          errors={errors}
          placeholder="Card holder name"
        />
      </div>

      <div>
        <Button type="submit" size="lg" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
