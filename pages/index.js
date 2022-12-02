import styled from "styled-components";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Card from "../src/components/Card";
import Form from "../src/components/Form";
import { useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);
  console.log(cards);
  function handleAddCard(newCard) {
    setCards([newCard, ...cards]);
  }

  return (
    <>
      <Header />
      <MainContent>
        {cards.map((card) => {
          return <Card key={card.id} text={card.text} name={card.name} />;
        })}
      </MainContent>
      <Form onAddCard={handleAddCard} />
      <Footer />
    </>
  );
}

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
`;
