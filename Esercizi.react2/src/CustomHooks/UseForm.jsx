import { useState } from 'react';

export function useForm(initialValues = { username: '', password: '' }) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return {
    formValues,
    handleChange,
  };
}
