"use client";

import Button from "@/lib/ui/components/Button";
import usePaymentForm from "@/lib/hooks/usePaymentForm";
import { CreditCardType } from "@/types/hooks/i-use-payment";
import InputField from "@/lib/ui/components/InputField";
import Image from "next/image";

const renderCardType = (cardType: string | undefined) => {
  switch (cardType) {
    case CreditCardType.Visa:
      return <Image src="/images/visa.svg" alt="Visa" width={48} height={48} />;
    case CreditCardType.Mastercard:
      return (
        <Image
          src="/images/mastercard.svg"
          alt="Mastercard"
          width={48}
          height={48}
        />
      );
    case CreditCardType.AmericanExpress:
      return (
        <Image
          src="/images/american-express.svg"
          alt="American Express"
          width={48}
          height={48}
        />
      );
    default:
      return (
        <Image
          src="/images/credit-card.png"
          alt="unknown credit card"
          width={48}
          height={48}
        />
      );
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
  } = usePaymentForm();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex gap-4 flex-col"
    >
      <div className="w-12 h-12">{renderCardType(cardType)}</div>

      <div>
        <InputField
          required
          name="cardNumber"
          onChange={handleCardNumberChange}
          value={formattedCardNumber}
          placeholder="Card Number"
          errors={errors}
        />
      </div>

      <div>
        <InputField
          required
          name="expiryDate"
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
          name="cardHolderName"
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
