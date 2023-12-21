import { ReactNode } from "react";
import { Metadata } from "next";
import UserLayout from "@/lib/ui/layouts/UserLayout";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Wtheq merchant dashboard",
    default: "Wtheq merchant dashboard",
  },
  description: "Wtheq merchant dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserLayout>
          <div className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
        </UserLayout>
      </body>
    </html>
  );
}
