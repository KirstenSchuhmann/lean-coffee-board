import styled from "styled-components";
import useForm from "../Hooks/useForm";

export default function Form() {
  const addToList = () => {
    console.log(values);
  };

  const [values, handleChange, handleSubmit] = useForm(addToList);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          name="thoughts"
          value={values.thoughts}
          placeholder="Your thoughts"
          onChange={handleChange}
          required
        />

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
          maxLength={20}
        />
        <StyledButton> + </StyledButton>
      </form>
    </>
  );
}

const StyledButton = styled.button`
  border-radius: 50%;
  color: grey;
  margin: 20px;
`;
