export enum GenderType {
  Male,
  Female,
}

export interface User {
  name: string;
  gender: GenderType;
  dob: string;
}
