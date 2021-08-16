import { createReducer } from "deox";
import * as actions from "../actions";
import { ILoginResponse } from "../api/loginResponse.dto";

interface ILoginState {
  userInfo: ILoginResponse;
  isLoading: boolean;
  errors: null | string;
}

const defaultState: ILoginState = {
  userInfo: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    roles: ["customer"],
  },
  isLoading: false,
  errors: null,
};

const loginReducer = createReducer(defaultState, (handleAction) => [
  handleAction(actions.LOGIN_REQUEST, (state) => ({
    ...state,
    isLoading: true,
    errors: null,
  })),
  handleAction(actions.LOGIN_SUCCESS, (state, { payload }) => {
    return {
      ...state,
      userInfo: payload.response,
      isLoading: false,
      errors: null,
    };
  }),
  handleAction(actions.LOGIN_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response,
    };
  }),
]);

export default loginReducer;
