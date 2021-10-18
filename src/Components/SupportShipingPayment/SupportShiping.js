import { faGifts, faHandHoldingUsd, faHeadset, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SupportShiping.css'
const SupportShiping = () => {
  return (
    <>
      <div className="voucherShipSupPay-container">
        <div className="container">
        <div className="row voucherShipSupPay">
          <div className="col-md-3">
            <div className="voucherDiv">
              <h3><span><FontAwesomeIcon icon={faGifts} /></span> Gift Voucher</h3>
            </div>
          </div>
          <div className="col-md-3">
          <div className="shippingDiv">
          <h3> <span><FontAwesomeIcon icon={faShippingFast} /></span> Fast Shipping</h3>
            </div>
          </div>
          <div className="col-md-3">
          <div className="supportDiv">
          <h3><span><FontAwesomeIcon icon={faHeadset} /></span> 24/7 Support</h3>
            </div>
          </div>
          <div className="col-md-3">
          <div className="paymentDiv">
          <h3> <span><FontAwesomeIcon icon={faHandHoldingUsd} /></span> Secure Payment</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SupportShiping;