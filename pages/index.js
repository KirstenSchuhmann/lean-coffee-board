import styled from "styled-components";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Card from "../src/components/Card";

import { useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);
  console.log(cards);

  function handleAddCard(newCard) {
    setCards([newCard, ...cards]);
  }

  function handleDeleteCard(id) {
    const DeleteCard = cards.filter((card) => card.id !== id);
    setCards(DeleteCard);
  }

  return (
    <>
      <Header />
      <MainContent>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              text={card.text}
              name={card.name}
              onDeleteCard={handleDeleteCard}
            />
          );
        })}
      </MainContent>

      <Footer onAddCard={handleAddCard} />
    </>
  );
}

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
`;
