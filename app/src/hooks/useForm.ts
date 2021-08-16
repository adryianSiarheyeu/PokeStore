import {ChangeEvent, useCallback, useState} from "react";

interface FormInterface<T> {
  formValues: T;
  handleFormFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function useForm<T>(initialValues: T): FormInterface<T> {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleFormFieldChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return { formValues, handleFormFieldChange };
}

export default useForm;
