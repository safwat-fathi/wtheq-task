import { Metadata } from "next";
import PaymentForm from "./components/PaymentForm";

export const metadata: Metadata = {
  title: "Payment",
  description: "This is payment page for Wtheq merchant dashboard",
};

const Payment = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10">Payment</h1>
      <PaymentForm />
    </>
  );
};

export default Payment;
