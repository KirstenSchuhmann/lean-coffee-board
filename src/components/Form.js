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
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          placeholder="Your thoughts"
          required
          autoComplete="off"
        />

        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          maxLength={20}
          autoComplete="off"
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
