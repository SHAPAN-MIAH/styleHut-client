import React from "react";
// import Item from "./Item";
import './ProductsItem.css'


const ProductsItem = (props) => {
  console.log(props);
  const { name, imageUrl, imageUrlOne} = props.product;

  return (
    <>
    <div className="product">
      <img src={imageUrl} alt=""/>
    </div>
    </>
  );
};

export default ProductsItem;
