import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faEye, faTicketAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Shoes.css";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ShoesDetailsPage from '../ShoesDetailsPage/ShoesDetailsPage';
import ShoesDetails from '../ShoesDetails/ShoesDetails';
import QuickViewModal from '../../QuickViewModal/QuickViewModal';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../../Redux/Actions/CartAction';



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

const Shoes = (props) => {
  const { name, price, imagesUrl, _id, description1, description2} =props.shoesInfo;

  const history = useHistory();

  const handelShoesDetail = id => {
    console.log("clicked", id );
    history.push(`/shoesDetails/${id}`)
  }

  const [qviewProductDetail, setQviewProductDetail] = useState([])
  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/womenShoes/${_id}`)
      .then((res) => res.json())
      .then((data) => setQviewProductDetail(data));
  }, []);

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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch()

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
            <div className='interaction-container d-flex' onClick={() => dispatch(addToCart(props.shoesInfo))}><small>Add to cart</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faCartPlus} /></span></div></div>
            <div className='interaction-container d-flex' onClick={openModal}><small>Quick view</small> <div className='interactionIcon-div'><span className='interactionIcon'><FontAwesomeIcon icon={faEye} /></span></div></div>
          </div>
        </div>
        <div>
            <small className="shoes-name">{name}</small>
            <br/>
            <small className="price">${price}</small>
        </div>
      </div>

      <Modal
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
          qviewProductDetail.map(shoeDetailInfo => <QuickViewModal key={shoeDetailInfo.key} shoeDetailInfo={shoeDetailInfo}></QuickViewModal>)
        }
        </div>
      </Modal>
    </>
  );
};

export default Shoes;