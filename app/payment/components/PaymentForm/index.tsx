import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { CreditCardFormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import paymentSchema from "./schema";
import Button from "@/lib/ui/components/Button";

const PaymentForm = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreditCardFormData>({
    resolver: yupResolver(paymentSchema),
  });

  const onSuccess: SubmitHandler<CreditCardFormData> = data => {
    console.log("Form submitted with data:", data);
  };

  const onError: SubmitErrorHandler<CreditCardFormData> = errors => {
    console.log("Form submission errors:", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSuccess, onError)}>
      <div className="mb-5">
        <Button
          loading={isSubmitting}
          type="submit"
          size="lg"
          className="w-full"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
