import {AxiosResponse} from "axios";
import api from "../../../http/config";

import {LoginResponseDto, SignInDto} from "../dto/login.dtos";

export const signIn = (body: SignInDto): Promise<AxiosResponse<LoginResponseDto>> =>
  api.post("auth/signIn", body);
