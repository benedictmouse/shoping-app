import React from 'react';
import "../styles/cart.css";

const Cart = ({ cartItems }) => {
  return (
    <section className='cart'>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className='cart-items'>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <div className='cart-item-image'>
                <img src={item.img} alt={item.title} />
              </div>
              <div className='item-details'>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
                <p>Price: {item.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>No items in cart</h2>
      )}
    </section>
  );
};

export default Cart;
