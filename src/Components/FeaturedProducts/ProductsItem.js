import { faCartPlus, faEye, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
// import Item from "./Item";
import './ProductsItem.css'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import QuickViewModal from "../ProductCollection/QuickViewModal/QuickViewModal";
import QuickViewsModal from './../ProductCollection/ManJacketCollection/quickViewModal/QuickViewsModal';
import FeatureProductQv from './FeatureProductQv';


const customStyles = {
  content: {
    // width: '950px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
  },
};


const ProductsItem = (props) => {
  // console.log(props);
  const { name, imagesUrl, price, _id} = props.product;

  const history = useHistory()

  const handleHoodieDetails = id => {
    // console.log("clicked", id);
    history.push(`/mensJacketDetail/${id}`)

  }

  const [fProductDetailQv, setFProductDetailQv] = useState([])

  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/menJacket/${_id}`)
      .then((res) => res.json())
      .then((data) => setFProductDetailQv(data));
  }, []);

  console.log(fProductDetailQv)

  // useEffect(() => {
  //   fetch(`http://localhost:5000/sweaters/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setQviewProductDetail(data));
  // }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/hoodies/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setQviewProductDetail(data));
  // }, []);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/womenShoes/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setQviewProductDetail(data));
  // }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    {/* <div className="product">
      <img src={imagesUrl.imageUrl1} alt=""/>
    </div>
    <div className='interactionDiv'>
      <div className='interaction-container d-flex'><small>Add to wishlist</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faHeart} /></span></div></div>
      <div className='interaction-container d-flex'><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
      <div className='interaction-container d-flex'><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
    </div>      
    <p>{name}</p>
    <p>{price}</p> */}

    <div>
      <div className="jacketDiv">
        <span onClick={() => handleHoodieDetails(_id)}>
          <div className="productImg">
            <img  src={imagesUrl.imageUrl1} alt=""/>
          </div>
        </span>
        <div className='interactionDiv'>
          <div className='interaction-container d-flex'><small>Add to wishlist</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faHeart} /></span></div></div>
          <div className='interaction-container d-flex'><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
          <div className='interaction-container d-flex' onClick={openModal}><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
        </div>
      </div>
      <div>
        <small className="jacket-name">{name}</small>
        <br/>
        <small className="price">${price}</small>
      </div>
    </div>
    <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{textAlign: 'end', margin: 'auto', cursor: 'pointer'}}>
        <span onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className='mt-3'>
        {
          fProductDetailQv.map(jacketDetailInfo => <FeatureProductQv key={jacketDetailInfo.key} jacketDetailInfo={jacketDetailInfo}></FeatureProductQv>)
        }
        </div>
      </Modal>
    </>
  );
};

export default ProductsItem;
