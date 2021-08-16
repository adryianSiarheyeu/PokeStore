import { AxiosResponse } from "axios";
import api from "../../../http/config";
import { ILoginResponse } from "./loginResponse.dto";

export interface ISignInDTO {
  email: string;
  password: string;
}

export const signIn = (body: ISignInDTO): Promise<AxiosResponse<ILoginResponse>> =>
  api.post("auth/signIn", body);
