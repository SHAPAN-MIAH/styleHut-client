import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsletterContact from '../../NewsletterContact/NewsletterContact';
import CopyRight from '../../Shared/CopyRight/CopyRight';
import Footer from '../../Shared/Footer/Footer';
import SupportShiping from '../../SupportShipingPayment/SupportShiping';
import SweaterDetails from './SweaterDetails';
import './SweaterDetailPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Topbar from './../../Shared/Topbar/Topbar';
import Nav from './../../Shared/Nav/Nav';

const SweaterDetailsPage = () => {
  const {id} = useParams();
  const [sweaterDetail, setSweaterDetail] = useState([]);

  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/sweater/${id}`)
      .then((res) => res.json())
      .then((data) => setSweaterDetail(data));
  }, []);
  
  return (
    <>
      <div>
        <Topbar/>
        <Nav/>

        <div className="container pb-5 sweaterDetail-path">
          <small><span><a href="/">Home</a></span> / <span><a href="/women/sweater">Women <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span> Sweater</a></span> / <span>Detail</span></small>
        </div>

        <div className="sweaterDetail-container">
          {
            sweaterDetail.map(sweaterDetailInfo => <SweaterDetails key={sweaterDetailInfo.key} sweaterDetailInfo={sweaterDetailInfo}></SweaterDetails>)
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

export default SweaterDetailsPage;