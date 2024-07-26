import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import appLinks from './Links';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Home = React.lazy(() => import('../pages/Home'));
const Men = React.lazy(() => import('../pages/Men'));
const Women = React.lazy(() => import('../pages/Women'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Wishlist = React.lazy(() => import('../pages/WishList'));
const Order = React.lazy(() => import('../pages/Order'));
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));
const Logout = React.lazy(() => import('../pages/Logout'));
const UserProfile = React.lazy(() => import('../pages/UserProfile'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const OurTeam = React.lazy(() => import('../pages/OurTeam'));

const BaseRouter = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  return (
    <Router>
      <Suspense fallback={<div>We are shopping soon....</div>}>
        <Navbar />
        <Routes>
          <Route exact path={appLinks?.Home} element={<Home addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path={appLinks?.Men} element={<Men addToCart={addToCart} />} />
          <Route path={appLinks?.Women} element={<Women addToCart={addToCart} />} />
          <Route path={appLinks?.Cart} element={<Cart cartItems={cartItems} />} />
          <Route path={appLinks?.Wishlist} element={<Wishlist wishlistItems={wishlistItems}/>} />
          <Route path={appLinks?.Order} element={<Order />} />
          <Route path={appLinks?.Register} element={<Register />} />
          <Route path={appLinks?.Login} element={<Login />} />
          <Route path={appLinks?.Logout} element={<Logout />} />
          <Route path={appLinks?.UserProfile} element={<UserProfile />} />
          <Route path={appLinks?.AboutUs} element={<AboutUs />} />
          <Route path={appLinks?.OurTeam} element={<OurTeam />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default BaseRouter;
