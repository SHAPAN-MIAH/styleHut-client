import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sweater.css'

const Sweater = (props) => {
  console.log(props)
  const { name, price, imagesUrl, _id} =props.sweaterInfo;

  const history = useHistory()
  const handelSweaterDetail = id => {
    console.log("clicked", id );
    history.push(`/sweaterDetail/${id}`)
  }

  return (
    <div>
      <div className="sweaterDiv">
        <span onClick={ () => handelSweaterDetail(_id)} >
          <div className="sweaterImg">
            <img  src={imagesUrl.imageUrl1} alt=""/>
          </div>
        </span>
        <div className='interactionDiv'>
          <div className='interaction-container d-flex'><small>Add to wishlist</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faHeart} /></span></div></div>
          <div className='interaction-container d-flex'><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
          <div className='interaction-container d-flex'><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
        </div>
      </div>
      <div>
        <small className="sweater-name">{name}</small>
        <br/>
        <small className="price">${price}</small>
      </div>
    </div>
  );
};

export default Sweater;