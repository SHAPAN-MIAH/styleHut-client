import { faCcAmazonPay, faCcAmex, faCcDiscover, faCcMastercard, faCcPaypal, faCcStripe, faCcVisa, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CopyRight.css'

const CopyRight = () => {
  return (
    <div className="container mt-5 mb-5">
      <div class="row">
        <div className="col-md-6 copyrightDiv mt-2">
          <small><span><FontAwesomeIcon icon={faCopyright} /></span> {(new Date()).getFullYear()} StyleHut All Rights Reserved</small>
        </div>
        <div className="col-md-6 paymentCardDiv">
        <span><FontAwesomeIcon icon={faCcVisa} /></span>
        <span><FontAwesomeIcon icon={faCcPaypal} /></span>
        <span><FontAwesomeIcon icon={faCcStripe} /></span>
        <span><FontAwesomeIcon icon={faCcAmazonPay} /></span>
        <span><FontAwesomeIcon icon={faCcMastercard} /></span> 
        <span><FontAwesomeIcon icon={faCcDiscover} /></span> 
        <span><FontAwesomeIcon icon={faCcAmex} /></span> 
        </div>
      </div>
    </div>
  );
};

export default CopyRight;