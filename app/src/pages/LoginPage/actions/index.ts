import {createActionCreator} from "deox";
import {CustomPayload} from "../../../helpers/requests/actionPostfixCreator";
import {LoginResponseDto, SignInDto} from "../dto/login.dtos";

interface LoginResponsePayload extends CustomPayload {
  response: LoginResponseDto;
}

export const LOGIN_REQUEST = createActionCreator(
  "LOGIN_REQUEST",
  (resolve) => (payload: SignInDto) => resolve(payload)
);
export const LOGIN_SUCCESS = createActionCreator(
  "LOGIN_SUCCESS",
  (resolve) => (payload: LoginResponsePayload) => resolve(payload)
);
export const LOGIN_FAIL = createActionCreator(
  "LOGIN_FAIL",
  (resolve) => (response: CustomPayload) => resolve(response)
);
