import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFax, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../assets/images/stylehut-logo3.png';
import './Footer.css'
import NewArrivals from './../../NewArrivals/NewArrivals';

const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="">
                <img className="logo" src={logo} alt=""/>
              </a>
              <p><span><FontAwesomeIcon icon={faLocationArrow} /></span> 45 Grand Central Terminal New York,NY 1017 United State USA</p>
              <p><span><FontAwesomeIcon icon={faPhone} /></span> Call us: (+123) 456 789</p>
              <p><span><FontAwesomeIcon icon={faFax} /></span> Fax: (+204) 666 888</p>
              <p><span><FontAwesomeIcon icon={faEnvelope} /></span> Email us: demo@demo.com</p>
            </div>
            <div className="col-md-3">
              <h1>Products</h1>
              <a href=""><p>New Arrivals</p></a>
              <a href=""><p>Best sales</p></a>
              <a href=""><p>Mens</p></a>
              <a href=""><p>Women</p></a>
              <a href=""><p>Featured products</p></a>
              
              
            </div>
            <div className="col-md-3">
            <h1>Our Company</h1>
            <a href=""><p>About us</p></a>
            <a href=""><p>Terms and conditions</p></a>
            <a href=""><p>Legal Notice</p></a>
            <a href=""><p>Delivery</p></a>
            <a href=""><p>Secure payment</p></a>
            </div>
            <div className="col-md-3">
            <h1>Your Account</h1>
            <a href=""><p>Personal info</p></a>
            <a href=""><p>Orders</p></a>
            <a href=""><p>Credit slips</p></a>
            <a href=""><p>My wishlists</p></a>
            <a href=""><p>My Cart</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;