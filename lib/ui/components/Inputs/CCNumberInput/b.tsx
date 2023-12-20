// ... (Previous code)

const CreditCardForm: React.FC = () => {
  // ... (Previous code)

  const [formattedExpiryDate, setFormattedExpiryDate] = useState<string>("");
  const [formattedCVV, setFormattedCVV] = useState<string>("");

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputExpiryDate = event.target.value;
    const formattedDate = formatExpiryDate(inputExpiryDate);
    setFormattedExpiryDate(formattedDate);
  };

  const formatExpiryDate = (expiryDate: string): string => {
    const cleanedExpiryDate = expiryDate.replace(/[^0-9]/g, "");
    const formattedExpiryDate = cleanedExpiryDate
      .slice(0, 4)
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .trim();

    return formattedExpiryDate;
  };

  const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCVV = event.target.value;
    const formattedCVV = formatCVV(inputCVV);
    setFormattedCVV(formattedCVV);
  };

  const formatCVV = (cvv: string): string => {
    const cleanedCVV = cvv.replace(/[^0-9]/g, "");
    return cleanedCVV;
  };

  // ... (Rest of the code)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Card Number input */}
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          {...register("cardNumber")}
          placeholder="Card Number"
          value={formattedCardNumber}
          onChange={handleCardNumberChange}
          className={`border ${
            errors.cardNumber ? "border-red-500" : "border-gray-300"
          } p-2 rounded-md`}
        />
        <p>{errors.cardNumber?.message}</p>
      </div>

      {/* Expiry Date input */}
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          {...register("expiryDate")}
          placeholder="MM/YY"
          value={formattedExpiryDate}
          onChange={handleExpiryDateChange}
          className={`border ${
            errors.expiryDate ? "border-red-500" : "border-gray-300"
          } p-2 rounded-md`}
        />
        <p>{errors.expiryDate?.message}</p>
      </div>

      {/* Cardholder Name input */}
      <div>
        <label htmlFor="cardHolderName">Cardholder Name:</label>
        <input
          type="text"
          id="cardHolderName"
          {...register("cardHolderName")}
          placeholder="Cardholder Name"
          className={`border ${
            errors.cardHolderName ? "border-red-500" : "border-gray-300"
          } p-2 rounded-md`}
        />
        <p>{errors.cardHolderName?.message}</p>
      </div>

      {/* CVV input */}
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          {...register("cvv")}
          placeholder="CVV"
          value={formattedCVV}
          onChange={handleCVVChange}
          className={`border ${
            errors.cvv ? "border-red-500" : "border-gray-300"
          } p-2 rounded-md`}
        />
        <p>{errors.cvv?.message}</p>
      </div>

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreditCardForm;
