import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AuthImage from "../components/AuthImage";
import SignupForm from "./components/SignupForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Signup | Wtheq Seller",
  description: "This is Signup page for Wtheq Seller",
};

const SignUp = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token?.value) {
    redirect("/");
  }

  return (
    <main>
      <div className="flex flex-wrap items-center h-screen">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <div className="mb-5.5 inline-block">
              <Image
                className="hidden dark:block"
                src={"/images/logo/logo.svg"}
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/logo-dark.svg"}
                alt="Logo"
                width={176}
                height={32}
              />
            </div>
            <p className="2xl:px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse.
            </p>

            <AuthImage />
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5">
            <span className="mb-1.5 block font-medium">Start for free</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Signup to Wtheq Seller Dashboard
            </h2>

            <SignupForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
