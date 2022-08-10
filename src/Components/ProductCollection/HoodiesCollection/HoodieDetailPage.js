import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsletterContact from '../../NewsletterContact/NewsletterContact';
import CopyRight from '../../Shared/CopyRight/CopyRight';
import Footer from '../../Shared/Footer/Footer';
import SupportShiping from '../../SupportShipingPayment/SupportShiping';
import HoodieDetails from './HoodieDetails';
import './HoodieDetailPage.css'
import Topbar from './../../Shared/Topbar/Topbar';
import Nav from './../../Shared/Nav/Nav';

const HoodieDetailPage = () => {
  const {id} = useParams();
  const [hoodieDetail, setHoodieDetail] = useState([]);

  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/hoodie/${id}`)
      .then((res) => res.json())
      .then((data) => setHoodieDetail(data));
  }, []);


  return (
    <>
      <div>
        <Topbar/>
        <Nav/>

        <div className="container pb-5 hoodieDetail-path">
          <small><span><a href="/">Home</a></span> / <span><a href="/women/hoodie">Women <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span> Hoodie</a></span> / <span>Detail</span></small>
        </div>

        <div className="sweaterDetail-container">
          {
            hoodieDetail.map(hoodieDetailInfo => <HoodieDetails key={hoodieDetailInfo.key} hoodieDetailInfo={hoodieDetailInfo}></HoodieDetails>)
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

export default HoodieDetailPage;