import {ChangeEvent, FC, MouseEvent} from "react";
import {SignInDto} from "../../dto/login.dtos";

interface LoginFormProps {
  formValues: SignInDto;
  onFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: MouseEvent) => void;
  isLoading: boolean;
  error: string;
}

const LoginForm: FC<LoginFormProps> = ({
  formValues,
  onFormChange,
  handleSubmit,
  isLoading,
  error,
}) => {
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <input type="text" name="email" value={formValues.email} onChange={onFormChange} />
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onFormChange}
          />
          <button onClick={handleSubmit}>Click</button>
        </>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default LoginForm;
