import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import Topbar from './../Shared/Topbar/Topbar';
import Nav from '../Shared/Nav/Nav';
import './CartItem/CartItem.css'
import { useDispatch } from 'react-redux';
import { ClearCart } from './../Redux/Actions/CartAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ShoppingaCart = () => {
  const cartItems = useSelector((state) => {
    return state.cart
  })

  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((a, c) => a + a.price * c.index,0)
  // console.log(total)
  
  return (
    
    <div>
      <Topbar/>
      <Nav/>
      <div className='container' style={{fontFamily: 'Poppins'}}>
        <div className='cart-header mb-2'>
          <h5>Shopping Cart</h5>
          <div className='d-flex'>
            <p>You have {cartItems.length} items in shopping cart</p>
            <button className='clearCart-btn' onClick={() => dispatch(ClearCart())} type=""><FontAwesomeIcon icon={faTrash} /> Clear Cart</button>
          </div>
        </div>
        <div className='cart-content'>
          {
            cartItems ?. length?
            cartItems.map(item => 
            <CartItem key={item.id} item={item}></CartItem>)
            :
            <p className='d-flex justify-content-center cartEmptyAlert'>Your cart is empty</p>
          }
        </div>
        <div className='cart-total mt-3'>
          <h6 className='text-end'>Total = 
            {totalPrice}
          </h6>
        </div>
        <div className='checkout-container text-end'>
          <button type="">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingaCart;