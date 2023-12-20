import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wtheq merchant dashboard | Not Found",
  description: "Wtheq Seller Admin Dashboard",
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">404 - Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/" className="underline">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
