import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NewsletterContact from '../../NewsletterContact/NewsletterContact';
import CopyRight from '../../Shared/CopyRight/CopyRight';
import Footer from '../../Shared/Footer/Footer';
import SupportShiping from '../../SupportShipingPayment/SupportShiping';
import MenJacketDetails from './MenJacketDetails';
import Topbar from './../../Shared/Topbar/Topbar';
import Nav from './../../Shared/Nav/Nav';


const MenJacketDetailPage = () => {
  const {id} = useParams();
  const [menJakcetDetail, setMenJakcetDetail] = useState([]);

  useEffect(() => {
    fetch(`https://protected-crag-98903.herokuapp.com/menJacket/${id}`)
      .then((res) => res.json())
      .then((data) => setMenJakcetDetail(data));
  }, []);


  return (
    <>
      <div>
        <Topbar/>
        <Nav/>

        <div className="container pb-5 hoodieDetail-path">
          <small><span><a href="/">Home</a></span> / <span><a href="/mens/jacket">men <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span> Jacket</a></span> / <span>Detail</span></small>
        </div>

        <div className="sweaterDetail-container">
          {
            menJakcetDetail.map(JakcetDetailInfo => <MenJacketDetails key={JakcetDetailInfo.key} JakcetDetailInfo={JakcetDetailInfo}></MenJacketDetails>)
          }
        </div>

        <SupportShiping/>
        <NewsletterContact/>
        <Footer/>
        <CopyRight/>
      </div>
    </>
  )
}

export default MenJacketDetailPage
