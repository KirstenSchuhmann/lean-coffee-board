import styled from "styled-components";

export default function Card({ entries, onDelete, onChange, onEdit }) {
  return (
    <StyledCard>
      <h3> Kartenname </h3>
      <p> Ersteller der Karte 🦄</p>
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
