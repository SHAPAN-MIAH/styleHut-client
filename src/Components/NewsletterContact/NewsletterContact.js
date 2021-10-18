import React from 'react';
import './NewsletterContact.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faGoogle, faGooglePlay, faGooglePlus, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsletterContact = () => {
  return (
    <>
     <div className="container ">
       <div className="row subscribeSection">
         <div className="col-md-6">
           <div className="NewsletterDiv">
              <div className="newsletterContent">
                <h1>Join The Newsletter</h1>
                <h6>Sign up our newsletter and get 10% off your next order.</h6>
              </div>
             <input type="text" name="Email" placeholder="Your email address" value=""/>
             <button id="subscribeBtn" type="submit">SUBSCRIBE</button>
           </div>
         </div>
         <div className="col-md-6">
           <div className="contactDiv">
             <h1>Connect With Us</h1>
             <h6>Follow Us On Social Network</h6>
             <div className="socialDiv">
             <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
             <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
             <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
             <a href=""><FontAwesomeIcon icon={faPinterest} /></a>
             <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
             <a href=""><FontAwesomeIcon icon={faGooglePlay} /></a>
             <a href=""><FontAwesomeIcon icon={faGoogle} /></a>
             </div>
             
           </div>
         </div>
       </div>
     </div> 
    </>
  );
};

export default NewsletterContact;