import React from 'react'
import Logo from "../images/benLogo.png"
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import "../styles/AboutUs.css"

function AboutUs() {
  return (
    <section className='container  about_us_container'>
      <div className='row about_us_row'>
        <div className='col-md-6 about_us_col'>
          <h1 className='about_us_title'>About Us</h1>
          <p className='about_us_text'>
            Bentech is an innovative online retail shop specializing in selling a diverse range of shoes, from casual sneakers to formal dress shoes.
             With a commitment to quality and customer satisfaction, Bentech ensures prompt delivery of footwear across the country, making stylish and comfortable shoes accessible to everyone.
              In addition to its extensive shoe collection, the company also offers comprehensive tech services, including website development and digital marketing. Bentech helps businesses establish a strong online presence by creating visually appealing and user-friendly websites, while also driving traffic and engagement through targeted digital marketing strategies. This unique combination of fashion retail and tech services positions Bentech as a versatile and forward-thinking company in the digital age.
          </p>
        </div>
        <div className='col-md-6 about_us_col'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='container about_us_container'>
          <div className='row about_us_container'>
            <div className='col-md-6 about_us_col'>
              <h1 className='our_location_title'>Our Location</h1>
          <p>Bentech is conveniently located at the heart of Nairobi, in Ongata Rongai. You can find us at the Oslegi Building, second floor, room ten. This central location allows us to efficiently serve our customers and manage our operations, ensuring the best possible service and quick delivery times. Whether you're shopping for shoes or seeking tech services, our team at Bentech is ready to assist you from our prime location.</p>
            </div>
          </div>
          <div className='container contact_us'>
            <div className='row'>
              <div className='contact_us'>
                <h1 className='contact_us_title'>Contact Us</h1>
                <p className='contact_us_text'>
                  For questions and inquires please reach as through
                </p>
                <p className='contact_us_text'>
                  <a href='mailto:benedictomondi60@gmail.com' className='about-email-link'>
                    <HiOutlineMailOpen /> benedictomondi60@gmail.com
                  </a></p>
                <p className='contact_us_call'> <FaPhoneSquareAlt /> 0792051011</p>
                <p ><a href='https://www.facebook.com/benedict.omondi.3' className='apppp-link'><FaFacebook /> Facebook</a></p>
                <p > <a href='https://www.instagram.com/m.o.u.s.e.e_' className='appp-link'><RiInstagramFill /> Instagram</a></p>
                <p> <a href='https://wa.me/qr/TRKFSNQHIX4VP1' className='app-link'><FaWhatsappSquare /> Whatsapp</a></p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs