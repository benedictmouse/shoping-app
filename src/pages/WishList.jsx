import React from 'react';
import '../styles/Wishlist.css';

const Wishlist = ({ wishlistItems }) => {
  return (
    <section className='wishlist'>
      <h1>Your Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className='wishlist-items'>
          {wishlistItems.map((item, index) => (
            <div key={index} className='wishlist-item'>
              <div className='wishlist-item-img-container'>
                <img src={item.img} alt={item.title} className='wishlist-item-img' />
              </div>
              <div className='wishlist-item-details'>
                <h3 className='wishlist-item-title'>{item.title}</h3>
                <p className='wishlist-item-company'>{item.company}</p>
                <p className='wishlist-item-price'>Price: {item.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>No items in wishlist</h2>
      )}
    </section>
  );
};

export default Wishlist;
