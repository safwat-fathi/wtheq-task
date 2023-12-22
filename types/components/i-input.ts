import { InputHTMLAttributes } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  errors: Record<string, string | null>;
};
