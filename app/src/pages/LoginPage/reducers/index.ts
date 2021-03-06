import {createReducer} from "deox";

import * as actions from "../actions";
import {LoginResponseDto} from "../dto/login.dtos";

interface ILoginState {
  userInfo: LoginResponseDto;
  isLoading: boolean;
  isAuth: boolean;
  errors: null | string;
}

const defaultState: ILoginState = {
  userInfo: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  isAuth: false,
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
      isAuth: true,
      isLoading: false,
      errors: null,
    };
  }),
  handleAction(actions.LOGIN_FAIL, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      isAuth: false,
      errors: payload.response,
    };
  }),
]);

export default loginReducer;
