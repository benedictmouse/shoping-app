import React, { useState } from 'react';
import Carosel from "../layouts/Carosel"
import Recommendation from './Recommendation';
import Cards from '../components/Cards';
import DUMMY from "../db/Data";
import MainBanner from "../layouts/MainBanner"

function Home({ addToCart ,addToWishlist}) {
  const [cards, setCards] = useState(DUMMY);
  const [filteredCards, setFilteredCards] = useState(DUMMY);

  const filterByCompany = (company) => {
    if (company === 'All') {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter(card => card.company === company));
    }
  };

  

  return (
    <>
      <Recommendation filterByCompany={filterByCompany} />
      <Carosel />
      <Cards cards={filteredCards}  addToCart={addToCart} addToWishlist={addToWishlist}/>
      <MainBanner />
    </>
  );
}

export default Home;
