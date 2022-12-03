import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Form({ onAddCard }) {
  // const addToList = () => {
  //   console.log(values);
  // };

  // const [values, handleChange, handleSubmit] = useForm(addToList);

  function handleSubmit(event) {
    event.preventDefault();
    const text = event.target.text.value;
    const name = event.target.name.value;

    const newCard = {
      text: text,
      name: name,
      id: nanoid(),
    };
    onAddCard(newCard);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextarea
          name="text"
          placeholder="Your thoughts"
          required
          autoComplete="off"
        />

        <StyledInput
          name="name"
          type="text"
          placeholder="Name"
          required
          maxLength={20}
          autoComplete="off"
        />
        <StyledButton> + </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledButton = styled.button`
  border-radius: 50%;
  color: grey;
  //margin: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  padding: 20px;
  width: 100%;
  gap: 1rem;
`;

const StyledTextarea = styled.textarea`
  height: 2.5rem;
  border-radius: 0.5em;
  border: 0.5px solid #ecead9;
  outline-color: #ffc097;
  font-family: sans-serif;
  caret-color: orange;
`;

const StyledInput = styled.input`
  height: 2.5rem;
  border-radius: 0.5em;
  border: 0.5px solid #ecead9;
  outline-color: #ffc097;
  caret-color: orange;

  // Styled
`;
