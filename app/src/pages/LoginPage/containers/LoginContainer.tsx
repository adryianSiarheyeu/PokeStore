import React, {FC, useCallback} from "react";
import {useForm, useTypedSelector} from "../../../hooks";
import LoginForm from "../components/LoginForm/LoginForm";
import {useDispatch} from "react-redux";
import {LOGIN_REQUEST} from "../actions";
import {SignInDto} from "../dto/login.dtos";

const LoginContainer: FC = () => {
  const dispatch = useDispatch();

  const { formValues, handleFormFieldChange } = useForm<SignInDto>({ email: "", password: "" });

  const { isLoading, errors } = useTypedSelector((state) => state.auth);

  const handleSubmit = useCallback(() => {
    dispatch(LOGIN_REQUEST(formValues));
  }, [dispatch, formValues]);

  return (
    <LoginForm
      formValues={formValues}
      onFormChange={handleFormFieldChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={errors}
    />
  );
};

export default LoginContainer;
