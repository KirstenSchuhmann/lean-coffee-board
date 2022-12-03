import styled from "styled-components";
import Form from "../Form";

export default function Footer({ onAddCard }) {
  return (
    <>
      <StyledFooter>
        <Divider className="divider" role="none" />
        <Form onAddCard={onAddCard} />
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  text-align: center;

  background: rgb(241, 216, 136);
  background: linear-gradient(
    13deg,
    rgba(241, 216, 136, 1) 0%,
    rgba(247, 237, 164, 0.7693452380952381) 48%,
    rgba(241, 216, 136, 1) 100%
  );
`;

const Divider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: black;
  margin-bottom: 20px;
  display: flex;
  background-color: #f1d08e;
`;
