import { faCartPlus, faEye, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './ManJacket.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import QuickViewModal from '../QuickViewModal/QuickViewModal';
import QuickViewsModal from './quickViewModal/QuickViewsModal';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../Redux/Actions/CartAction';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
  },
};

const ManJacket = (props) => {
  const { name, price, imagesUrl, _id,} = props.menJacket;

  const history = useHistory()

  const handleHoodieDetails = id => {
    console.log("clicked", id);
    history.push(`/mensJacketDetail/${id}`)

  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [qviewProductDetails, setQviewProductDetails] = useState([]);
  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/menJacket/${_id}`)
      .then((res) => res.json())
      .then((data) => setQviewProductDetails(data));
  }, []);

  const dispatch = useDispatch()

  return (
    <div>
      <div className="jacketDiv">
        <span onClick={() => handleHoodieDetails(_id)}>
          <div className="jacketImg">
            <img  src={imagesUrl.imageUrl1} alt=""/>
          </div>
        </span>
        <div className='interactionDiv'>
          <div className='interaction-container d-flex'><small>Add to wishlist</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faHeart} /></span></div></div>
          <div className='interaction-container d-flex' onClick={() => dispatch(addToCart(props.menJacket))}><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
          <div className='interaction-container d-flex' onClick={openModal}><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
        </div>
      </div>
      <div>
        <small className="jacket-name">{name}</small>
        <br/>
        <small className="price">${price}</small>
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
        <div className='mt-4'>
        {
          qviewProductDetails.map(menJacketDetailInfo => <QuickViewsModal key={menJacketDetailInfo.key} menJacketDetailInfo={menJacketDetailInfo}></QuickViewsModal>)
        }
        </div>
      </Modal>
    </div>
)  
}

export default ManJacket
