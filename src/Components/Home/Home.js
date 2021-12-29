import React from "react";
import AddProduct from "../Admin/AddProducts/AddProduct";
import Category from "../Category/Category";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import NewArrivals from "../NewArrivals/NewArrivals";
import NewsletterContact from "../NewsletterContact/NewsletterContact";
import HoodiesCollection from "../ProductCollection/HoodiesCollection/HoodiesCollection";
import ProductCollection from "../ProductCollection/ProductCollection";
import SweaterCollection from "../ProductCollection/SweaterCollection/SweaterCollection";
import SweaterDetailsPage from "../ProductCollection/SweaterCollection/SweaterDetailsPage";
import SaleOff from "../SaleOff/SaleOff";
import CopyRight from "../Shared/CopyRight/CopyRight";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav";
import Topbar from "../Shared/Topbar";
import Showcase from "../Showcase/Showcase";
import SupportShiping from "../SupportShipingPayment/SupportShiping";
import WhatHot from "../WhatHot/WhatHot";

const Home = () => {
  return (
    <>
      <Topbar/>
      <Nav />
      <Showcase />
      <Category/>
      <FeaturedProducts />
      <SupportShiping/>
      <NewArrivals/>
      <SaleOff/>
      <NewsletterContact/>
      <Footer/>
      <CopyRight/>
     
      
      
      {/* <AddProduct/> */}
    </>
  );
};

export default Home;
