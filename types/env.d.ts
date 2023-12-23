declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_DEV_API: string;
    }
  }
}

export {};
