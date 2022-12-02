import styled from "styled-components";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledHeader>
        {" "}
        <h1> Lean Coffee Board </h1>{" "}
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
  margin-bottom: 30px;
`;
