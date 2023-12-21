import Image from "next/image";
import { Metadata } from "next";
import { cookies } from "next/headers";
import LoginForm from "./components/LoginForm";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login Page",
  description: "This is login page for Wtheq merchant dashboard",
};

const Login = async () => {
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
                src={"/images/logo/logo-vertical.png"}
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/logo-vertical.png"}
                alt="Logo"
                width={176}
                height={32}
              />
            </div>

            {/* <AuthImage /> */}
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">
              Start doing business
            </span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Login to your Wtheq seller dashboard
            </h2>

            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
