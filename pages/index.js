import styled from "styled-components";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Card from "../src/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainContent>
        <Card />
        <Card />
      </MainContent>
      <Footer />
    </>
  );
}

const MainContent = styled.main`
  display: flex;
  justify-content: center;
`;
