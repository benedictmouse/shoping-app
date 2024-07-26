import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/benLogo.png";
import appLinks from "../constants/Links";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <Link to={appLinks.Home} className='footer-link'>
              <img src={Logo} alt="logo" /> Home
            </Link>
          </div>
          <div className='footer-links'>
            <ul>
              <li><Link to={appLinks.AboutUs} className='footer-link'>About</Link></li>
              <li><Link to={appLinks.UserProfile} className='footer-link'>Account</Link></li>
              <li><Link to={appLinks.OurTeam} className='footer-link'>Our Team</Link></li>
            </ul>
          </div>
        </div>
        <div className='footer-center'>
          <div className='footer-address'>
            <h3>Address</h3>
            <p>P.O box 1854-00500,</p>
            <p>Nairobi,</p>
            <p>Kenya</p>
          </div>
          <div className='footer-email'>
            <a href='mailto:benedictomondi60@gmail.com' className='footer-email-link'>
              <HiOutlineMailOpen /> benedictomondi60@gmail.com
            </a>
          </div>
        </div>
        <div className='footer-right'>
          <h3>Contact us</h3>
          <div className='footer-socials'>
            <a href='https://www.facebook.com/benedict.omondi.3' className='footer-link'><FaFacebook /> Facebook</a>
            <a href='https://www.instagram.com/m.o.u.s.e.e_' className='footer-link'><RiInstagramFill /> Instagram</a>
            <a href='https://www.x.com/BENEDIC61703332' className='footer-link'><FaSquareXTwitter /> Twitter</a>
            <a href='https://wa.me/qr/TRKFSNQHIX4VP1' className='footer-link'><FaWhatsappSquare /> Whatsapp</a>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        Copyright © 2022 Benedict Omondi. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
