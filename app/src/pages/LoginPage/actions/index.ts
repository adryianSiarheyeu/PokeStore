import { createActionCreator } from "deox";
import { ISignInDTO } from "../api";
import { CustomPayload } from "../../../helpers/requests/actionPostfixCreator";
import { ILoginResponse } from "../api/loginResponse.dto";

interface LoginResponsePayload extends CustomPayload {
  response: ILoginResponse;
}

export const LOGIN_REQUEST = createActionCreator(
  "LOGIN_REQUEST",
  (resolve) => (payload: ISignInDTO) => resolve(payload)
);
export const LOGIN_SUCCESS = createActionCreator(
  "LOGIN_SUCCESS",
  (resolve) => (payload: LoginResponsePayload) => resolve(payload)
);
export const LOGIN_FAIL = createActionCreator(
  "LOGIN_FAIL",
  (resolve) => (response: CustomPayload) => resolve(response)
);
