import React from 'react';
import './Sweater.css'

const Sweater = (props) => {
  const { name, price, imagesUrl} =props.sweaterInfo;

  return (
    <div className="sweaterDiv">
        <div className="sweaterImg">
          <img  src={imagesUrl.imageUrl1} alt=""/>
        </div>
        <div>
          <small>{name}</small>
          <p>${price}</p>
        </div>
    </div>
  );
};

export default Sweater;