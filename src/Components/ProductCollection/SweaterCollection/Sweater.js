import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sweater.css'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import QuickView from './QuickView/QuickView';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../Redux/Actions/CartAction';

const customStyles = {
  content: {
    borderRadius: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
  },
};



const Sweater = (props) => {
  // console.log(props)
  const { name, price, imagesUrl, _id} =props.sweaterInfo;

  const history = useHistory()
  const handelSweaterDetail = id => {
    // console.log("clicked", id );
    history.push(`/sweaterDetail/${id}`)
  }

  const [qviewDetail, setQviewDetail] = useState([])
  console.log(qviewDetail)
  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/sweater/${_id}`)
      .then((res) => res.json())
      .then((data) => setQviewDetail(data));
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch()

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
          <div className='interaction-container d-flex' onClick={() => dispatch(addToCart(props.sweaterInfo))}><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
          <div className='interaction-container d-flex' onClick={openModal}><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
        </div>
      </div>
      <div>
        <small className="sweater-name">{name}</small>
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
          qviewDetail.map(sweaterDetailInfo => <QuickView key={sweaterDetailInfo.key} sweaterDetailInfo={sweaterDetailInfo}></QuickView>)
        }
        </div>
      </Modal>
    </div>
  );
};

export default Sweater;