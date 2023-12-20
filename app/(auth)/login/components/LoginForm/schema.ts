import { Login } from "@/types/models";
import * as yup from "yup";

export const loginSchema: yup.ObjectSchema<Login> = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
