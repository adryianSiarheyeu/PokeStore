enum GendersEnum {
  male = "male",
  female = "female",
}

enum RolesEnum {
  customer = "customer",
  admin = "admin",
}

export interface IAddress {
  city: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
}

export interface ILoginResponse {
  _id: string;
  accessToken?: string;
  address?: IAddress;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: GendersEnum | "";
  roles: Array<string>;
}
