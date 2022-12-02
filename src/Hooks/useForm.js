import { useState } from "react";

const useForm = () => {
  const [state, setState] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.persist();
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  return [state, handleChange, handleSubmit];
};

export default useForm;
