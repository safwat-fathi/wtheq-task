"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function onLoginAction(token: string) {
  cookies().set({
    name: "token",
    value: token,
    // httpOnly: true,
    path: "/",
  });

  redirect("/");
}

export async function onLogoutAction() {
  cookies().delete("token");

  redirect("/login");
}

export async function getTokenAction() {
  const token = cookies().get("token");

  return token?.value ? token.value : null;
}
