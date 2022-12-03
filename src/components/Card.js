import styled from "styled-components";

export default function Card({ text, name, id, onDeleteCard }) {
  return (
    <StyledCard>
      <h3> {text}</h3>
      <p> {name}</p>
      <StyledButton onClick={() => onDeleteCard(id)}> - </StyledButton>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  position: relative;
  display: inline-block;
  text-align: center;
  background-color: #ffffc6;
  height: 150px;
  width: 450px;
  color: #443a2b;
  margin: 20px;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  position: absolute;
  height: 25px;
  width: 25px;
  top: 15px;
  right: 20px;
`;
