import React, {FC} from "react";

import styles from "./styles.module.scss";

interface TextFieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
  error?: string;
  placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({ value, onChange, type, error, placeholder, name }) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default TextField;
