import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Shoes.css"

const Shoes = (props) => {
  const { name, price, imagesUrl, _id, description1, description2} =props.shoesInfo;

  const history = useHistory();

  const handelShoesDetail = id => {
    console.log("clicked", id );
    history.push(`/shoesDetails/${id}`)
  }

  const interactionHandler = () => {
    const interactionDiv = document.querySelector(".interactionDiv");
    const ShoeDiv = document.querySelector(".ShoeDiv");

    // const showdivHover = ShoeDiv.style.hover = true;
    // if(showdivHover){
    //   interactionDiv.style.display = "block"
    // }else{
    //   interactionDiv.style.display = "none"
    // }
    
  }

  return (
    <>
      <div>
       <div className="ShoeDiv" onMouseEnter={interactionHandler}>
          <span onClick={ () => handelShoesDetail(_id)} >
            <div className="shoesImg">
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
            <small className="shoes-name">{name}</small>
            <br/>
            <small className="price">${price}</small>
        </div>
      </div>
    </>
  );
};

export default Shoes;