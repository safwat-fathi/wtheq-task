export enum GenderType {
  Male,
  Female,
}

export interface User {
  name: string;
  gender: GenderType;
  dob: string;
}

export interface CreditCard {
  cardNumber: string;
  expiryDate: string;
  cardHolderName: string;
  cvv: string;
  cardType?: string;
}
