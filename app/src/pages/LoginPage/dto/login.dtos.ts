interface IAddress {
  city: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
}

export interface LoginResponseDto {
  _id: string;
  accessToken?: string;
  address?: IAddress;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface SignInDto {
  email: string;
  password: string;
}
