import React from 'react';
import CardItem from './Carditem';
import '../styles/Cards.css';

const Cards = ({ cards, addToCart ,addToWishlist }) => {
  return (
    <section className='post'>
      {cards.length > 0 ? (
        <div className='container post_container'>
          {cards.map(({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => (
            <CardItem 
              key={title} 
              img={img} 
              title={title} 
              star={star} 
              reviews={reviews} 
              prevPrice={prevPrice} 
              newPrice={newPrice} 
              company={company} 
              category={category} 
              color={color} 
              addToCart={addToCart} 
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      ) : (
        <h2 className='no_post'>No items</h2>
      )}
    </section>
  );
};

export default Cards;
