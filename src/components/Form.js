import styled from "styled-components";

export default function Form() {
  return (
    <>
      <form>
        <label htmlFor="text"> Type your thoughts </label>
        <input type="text" id="text" />

        <label htmlFor="name"> Name </label>
        <input type="name" id="name" />
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
