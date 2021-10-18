import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartPlus, faPhone,  } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  return (
    <>
      <div class="container mt-3">
        <div class="row">
          <div className="col-md-4">
            <small style={{fontSize: "15px"}}><FontAwesomeIcon style={{fontSize: "17px"}} icon={faEnvelope} /> demo@demo.com</small>
            <small style={{marginLeft: "50px", fontSize: "15px"}}><FontAwesomeIcon style={{fontSize: "17px"}} icon={faPhone} /> (+123) 456 789</small>
          </div>
          <div className="col-md-5">
            
          </div>
          <div className="col-md-3">
            <span  style={{marginLeft: "100px" , fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)", borderRight: ".5px solid rgb(88, 88, 88)", paddingRight: "20px"}}><FontAwesomeIcon icon={faHeart} /></span>
            <span style={{marginLeft: "20px", fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)", borderRight: ".5px solid rgb(88, 88, 88)", paddingRight: "20px"}}><FontAwesomeIcon icon={faCartPlus} /></span>
            <span style={{marginLeft: "20px", fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)", borderRight: ".5px solid rgb(88, 88, 88)", paddingRight: "20px"}}><FontAwesomeIcon icon={faUser} /></span>
            <span style={{marginLeft: "20px", fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)"}}><FontAwesomeIcon icon={faBars} /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;