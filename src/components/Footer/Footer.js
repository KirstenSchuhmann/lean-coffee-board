import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Divider className="divider" role="none" />
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  display: inline-block;
  text-align: center;

  background-color: beige;
`;

const Divider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: black;
  margin-bottom: 20px;
  display: flex;
`;
