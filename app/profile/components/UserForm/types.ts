import { GenderType } from "@/types/models";

export interface UserFormData {
  name: string;
  gender: GenderType;
  dob: string;
}
