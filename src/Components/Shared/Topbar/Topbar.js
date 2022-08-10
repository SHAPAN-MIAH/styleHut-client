import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartPlus, faPhone,  } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
// import CartReducer from './../Redux/Reducers/CartReducer';

const Topbar = () => {
  const cartItemsLength = useSelector((state) => {
    return state.cart.length
  })
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
            <span className='cartCount' style={{position: "absolute", width: "15px", height: "15px", backgroundColor: "#fe3060", fontSize: "10px", color: "white", textAlign: "center", borderRadius: "50px", marginLeft: '-27px'}}>
              {
                cartItemsLength
              }
            </span>
            <a href='/shoppingCart'>
            <span style={{marginLeft: "20px", fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)", borderRight: ".5px solid rgb(88, 88, 88)", paddingRight: "20px"}}><FontAwesomeIcon icon={faCartPlus} /></span>
            <span className='cartCount' style={{position: "absolute", width: "15px", height: "15px", backgroundColor: "#fe3060", fontSize: "10px", color: "white", textAlign: "center", borderRadius: "50px", marginLeft: '-27px'}}>
              {
                cartItemsLength
              }
            </span>
            </a>
            <a href="/login"><span style={{marginLeft: "20px", fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)", borderRight: ".5px solid rgb(88, 88, 88)", paddingRight: "20px"}}><FontAwesomeIcon icon={faUser} /></span></a>
            <span style={{marginLeft: "20px", fontSize: "20px", cursor: 'pointer', color: "rgb(88, 88, 88)"}}><FontAwesomeIcon icon={faBars} /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;