import React from 'react'
import "../styles/MainBanner.css"
import { Link } from 'react-router-dom'
import appLinks from "../constants/Links";

const MainBanner = () => {
  return (
    <div className="main-banner">
    <div className="banner-content">
      <h1>Special offer</h1>
      <p>Up to 30% off on selected items</p>
      <p>in the wishlist</p>
      <div className="banner-buttons">
      <Link to={appLinks.Wishlist} className="btn-shop-now">
          View Wishlist
        </Link>
      
      </div>
    </div>
  </div>
);
};

export default MainBanner