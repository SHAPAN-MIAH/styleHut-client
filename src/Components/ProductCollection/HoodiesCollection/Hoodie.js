import React from 'react';
import './Hoodie.css'

const Hoodie = (props) => {
  const { name, price, imagesUrl} =props.hoodie;
  return (
    <div className="hoodieDiv">
      <div className="hoodieImg">
          <img  src={imagesUrl.imageUrl1} alt=""/>
        </div>
        <div>
          <small>{name}</small>
          <p>${price}</p>
        </div>
    </div>
  );
};

export default Hoodie;