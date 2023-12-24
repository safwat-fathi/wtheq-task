declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_DEV_API: string;
      PAYPAL_MODE: "sandbox" | "live";
      PAYPAL_CLIENT_ID: string;
      PAYPAL_CLIENT_SECRET: string;
      NEXT_PUBLIC_PAYPAL_CLIENT_ID: string;
    }
  }
}

export {};
