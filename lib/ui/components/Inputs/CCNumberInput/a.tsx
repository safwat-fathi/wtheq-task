// CreditCardForm.tsx

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { cardNumber, expirationDate, cardHolderName, cvv } from 'card-validator';

// Define the validation schema with yup
const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .test('valid-card-number', 'Invalid card number', (value) => cardNumber(value).isValid),
  expiryDate: yup
    .string()
    .test('valid-expiry-date', 'Invalid expiry date', (value) => expirationDate(value).isValid),
  cardHolderName: yup.string().required('Cardholder name is required'),
  cvv: yup
    .string()
    .test('valid-cvv', 'Invalid CVV', (value) => cvv(value).isValid),
});

// Define the form data interface
interface CreditCardFormData {
  cardNumber: string;
  expiryDate: string;
  cardHolderName: string;
  cvv: string;
}

const CreditCardForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardFormData>({
    resolver: async (data) => {
      try {
        await schema.validate(data, { abortEarly: false });
        return { values: data, errors: {} };
      } catch (errors) {
        return { values: {}, errors: yupToFormErrors(errors) };
      }
    },
  });

  const [formattedCardNumber, setFormattedCardNumber] = useState<string>('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardNumber = event.target.value.replace(/\s/g, ''); // Remove existing spaces
    const cardType = cardNumber(inputCardNumber).card?.type;
    const formattedNumber = formatCardNumber(inputCardNumber, cardType);
    setFormattedCardNumber(formattedNumber);
  };

  const formatCardNumber = (cardNumber: string, cardType: string | undefined): string => {
    if (!cardType) {
      return cardNumber; // Return as-is if card type is not detected
    }

    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
    const gaps = getGapsForCardType(cardType);

    return cardNumberWithoutSpaces
      .split('')
      .map((char, index) => (gaps.includes(index) ? ` ${char}` : char))
      .join('');
  };

  const getGapsForCardType = (cardType: string): number[] => {
    // Define the positions of gaps based on the card type
    if (cardType === 'mastercard' || cardType === 'visa') {
      return [4, 9, 14];
    }
    // Add more conditions for other card types if needed

    // Default to a generic pattern if the card type is not recognized
    return [4, 9, 14];
  };

  const yupToFormErrors = (yupErrors: yup.ValidationError): Record<string, string> => {
    const formErrors: Record<string, string> = {};
    for (const error of yupErrors.inner) {
      if (!formErrors[error.path]) {
        formErrors[error.path] = error.message;
      }
    }
    return formErrors;
  };

  const onSubmit: SubmitHandler<CreditCardFormData> = (data) => {
    console.log('Form submitted with data:', data);
  };

  useEffect(() => {
    // Clear the formatted card number when the component unmounts
    return () => setFormattedCardNumber('');
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          {...register('cardNumber')}
          placeholder="Card Number"
          value={formattedCardNumber}
          onChange={handleCardNumberChange}
          className={`border ${
            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
          } p-2 rounded-md`}
        />
        <p>{errors.cardNumber?.message}</p>
      </div>

      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          {...register('expiryDate')}
          placeholder="MM/YY"
          className={`border ${
            errors.expiryDate ? 'border-red-500' : 'border-gray-300'
          } p-2 rounded-md`}
        />
        <p>{errors.expiryDate?.message}</p>
      </div>

      <div>
        <label htmlFor="cardHolderName">Cardholder Name:</label>
        <input
          type="text"
          id="cardHolderName"
          {...register('cardHolderName')}
          placeholder="Cardholder Name"
          className={`border ${
            errors.cardHolderName ? 'border-red-500' : 'border-gray-300'
          } p-2 rounded-md`}
        />
        <p>{errors.cardHolderName?.message}</p
