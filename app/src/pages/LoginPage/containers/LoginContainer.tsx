import { FC, useCallback, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm, useTypedSelector } from '../../../hooks';
import LoginForm from '../components/LoginForm/LoginForm';
import { LOGIN_REQUEST } from '../actions';

import { SignInDto } from '../dto/login.dtos';
import { ROUTES } from '../../../router/routeNames';

const LoginContainer: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { formValues, handleFormFieldChange } = useForm<SignInDto>({ email: '', password: '' });

  const { isLoading, errors, isAuth } = useTypedSelector((state) => state.auth);

  const handleSubmit = useCallback(() => {
    dispatch(LOGIN_REQUEST(formValues));
  }, [dispatch, formValues]);

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.HOME);
    }
  }, [dispatch, isAuth]);

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
