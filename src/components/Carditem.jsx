import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import "../styles/Carditem.css";

const CardItem = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category, addToCart ,addToWishlist }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    const item = { img, title, star, reviews, prevPrice, newPrice, company, color, category };
    addToCart(item);
  };
  const handleWishlist = () => {
    setLiked(!liked);
    addToWishlist({ img, title, star, reviews, prevPrice, newPrice, company, color, category });
  };


  return (
    <div className='card'>
      <div className='card-img-container'>
        <img src={img} className='card-img' alt='shoes' />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="card-star">★</span>
          ))}
          <span className="card-reviews">({reviews})</span>
        </div>
        <div className="prev-card-price">
          <span className="card-prevPrice">{prevPrice}</span>
        </div>
        <div className="new-card-price">
          <span className="card-newPrice"> New price: {newPrice}</span>
        </div>
        <div className="card-actions">
          <button onClick={handleAddToCart} className="add-to-cart-button">Add to cart</button>
          <button onClick={handleWishlist} className={`like-button ${liked ? 'liked' : ''}`}>
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
