import {ChangeEvent, FC, FormEvent} from "react";
import {SignInDto} from "../../dto/login.dtos";
import TextField from "../../../../commonComponents/Inputs/TextField";

interface LoginFormProps {
  formValues: SignInDto;
  onFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
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
        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              value={formValues.email}
              name="email"
              onChange={onFormChange}
              type="email"
              placeholder="Your Email"
            />
            <TextField
              value={formValues.password}
              name="password"
              onChange={onFormChange}
              type="password"
              placeholder="Your Password"
            />
            <button type="submit">Click</button>
          </form>
        </div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default LoginForm;
