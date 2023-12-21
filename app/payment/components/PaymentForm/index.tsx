"use client";
import { number as cardNumber } from "card-validator";

import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { CreditCardFormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import paymentSchema from "./schema";
import Button from "@/lib/ui/components/Button";
import InputField from "@/lib/ui/components/InputField";
import {
  formatCardNumber,
  formatCVV,
  formatExpiryDate,
} from "@/lib/utils/payment";

const PaymentForm = () => {
  const methods = useForm<CreditCardFormData>({
    resolver: yupResolver(paymentSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSuccess: SubmitHandler<CreditCardFormData> = data => {
    console.log("Form submitted with data:", data);
  };

  const onError: SubmitErrorHandler<CreditCardFormData> = errors => {
    console.log("Form submission errors:", errors);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSuccess, onError)}
        className="flex gap-4 flex-col"
      >
        <div>
          <InputField
            name="cardNumber"
            placeholder="Card number"
            // onChange={e => {
            //   const value = e.target.value;

            //   // register("cardNumber").onChange(e);

            //   // const formattedValue = formatFunction && formatFunction(e.target.value);
            //   const cardType = cardNumber(value).card?.type;
            //   const formattedValue = formatCardNumber(value, cardType);
            //   console.log("🚀 ~ PaymentForm ~ formattedValue:", formattedValue);

            //   setValue("cardNumber", formattedValue);
            // }}
          />
        </div>

        <div>
          <InputField name="cvv" placeholder="CVV" />
        </div>

        <div>
          <InputField
            name="expiryDate"
            placeholder="Expire Date"
            // onChange={e => {
            //   const value = e.target.value;

            //   const formattedValue = formatExpiryDate(value);

            //   setValue("expiryDate", formattedValue);
            // }}
          />
        </div>

        <div>
          <InputField name="cardHolderName" placeholder="Name" />
        </div>

        <div>
          <Button
            loading={isSubmitting}
            type="submit"
            size="lg"
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default PaymentForm;
