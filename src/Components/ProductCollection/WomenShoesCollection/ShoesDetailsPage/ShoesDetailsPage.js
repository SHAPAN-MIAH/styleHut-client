import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsletterContact from '../../../NewsletterContact/NewsletterContact';
import CopyRight from '../../../Shared/CopyRight/CopyRight';
import Footer from '../../../Shared/Footer/Footer';
import Topbar from '../../../Shared/Topbar';
import SupportShiping from '../../../SupportShipingPayment/SupportShiping';
import ShoesDetails from '../ShoesDetails/ShoesDetails';
import Nav from './../../../Shared/Nav';

const ShoesDetailsPage = () => {
  const {id} = useParams();
  const [shoesDetail, setShoesDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/womenShoes/${id}`)
      .then((res) => res.json())
      .then((data) => setShoesDetail(data));
  }, []);

  return (
    <>
      <div>
        <Topbar/>
        <Nav/>

        <div className="container pb-5 sweaterDetail-path">
          <small><span><a href="/">Home</a></span> / <span><a href="/women/shoes">Women Shoes</a></span> / <span>Detail</span></small>
        </div>

        <div className="sweaterDetail-container">
          {
            shoesDetail.map(shoeDetailInfo => <ShoesDetails key={shoeDetailInfo.key} shoeDetailInfo={shoeDetailInfo}></ShoesDetails>)
          }
        </div>

        <SupportShiping/>
        <NewsletterContact/>
        <Footer/>
        <CopyRight/>
      </div>
    </>
  );
};

export default ShoesDetailsPage;