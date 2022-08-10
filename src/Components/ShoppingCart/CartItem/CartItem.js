import React from 'react';
import './CartItem.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartAction';

const CartItem = (props) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const dispatch = useDispatch()
  return (
    <div className='cart-item'>
      <img src={props.item.imagesUrl.imageUrl1} alt=""/>
      <div className='item-name'>
      <p>{props.item.name}</p>
      </div>
      
        <div className='item-quantity'>
          <span onClick={()=> setQuantityCount(quantityCount > 1 ? quantityCount - 1 : quantityCount)} className='minus'>-</span>
          <span className='count-number'>{quantityCount}</span>
          <span onClick={()=> setQuantityCount(quantityCount + 1)} className='plus'>+</span>
        </div> 
      
      <div className='item-price'>
       <p>$ {props.item.price}</p>
      </div>

      <div className='item-delete'>
      <FontAwesomeIcon onClick={() => dispatch(removeFromCart(props.item._id))} icon={faTrash} />
      </div>
    </div>
  );
};

export default CartItem;