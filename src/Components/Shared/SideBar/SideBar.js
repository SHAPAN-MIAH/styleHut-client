import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faGoogle, faGooglePlay, faGooglePlus, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './SideBar.css'

const SideBar = () => {
  return (
    <>
      <aside className="aside">
        <div className="SideBarContainer">
          <div className="sideBar-header">
            <h5> <span><FontAwesomeIcon icon={faBars} /></span> Shop By Departments</h5>
          </div>
          <div className="category-list">
            <ul>
              <li>Mens</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Winter Collections</li>
              <li>Summer Collections</li>
              <li>Jewelry</li>
              <li>Eye Wear</li>
              <li>Watch</li>
              <li>Shoes</li>
              <><span><FontAwesomeIcon icon={faPlus} /></span> View more</>
              
            </ul>
          </div>
        </div>
        <div className="social-contact">
              <h5>Connect With Us</h5>
              <p>Follow Us On Social Network</p>
              <div className="social-container">
                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faPinterest} /></a>
                <br/>
                <div className="social2">
                <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                <a href=""><FontAwesomeIcon icon={faGooglePlay} /></a>
                <a href=""><FontAwesomeIcon icon={faGoogle} /></a>
                </div>
              </div>
            </div>
      </aside>
    </>
  );
};

export default SideBar;