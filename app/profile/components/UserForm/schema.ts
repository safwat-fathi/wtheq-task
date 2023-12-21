import * as yup from "yup";
import { UserFormData } from "./types";
import { GenderType } from "@/types/models";

const paymentSchema: yup.ObjectSchema<UserFormData> = yup.object().shape({
  // const paymentSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  dob: yup.string().required("Date of birth is required"),
  gender: yup
    .mixed<GenderType>()
    .oneOf([GenderType.Male, GenderType.Female], "Please select valid gender")
    .required("Gender is required"),
  // .nullable(),
});

export default paymentSchema;
