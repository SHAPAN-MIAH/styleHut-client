import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsletterContact from '../../NewsletterContact/NewsletterContact'
import CopyRight from '../../Shared/CopyRight/CopyRight'
import Footer from '../../Shared/Footer/Footer'
import Nav from '../../Shared/Nav'
import SideBar from '../../Shared/SideBar/SideBar'
import Topbar from '../../Shared/Topbar'
import SupportShiping from '../../SupportShipingPayment/SupportShiping';
import ManJacket from './ManJacket'


const jacketCollections = [
  {
    category: "Jacket",
    name: "Men Black Solid Bomber Jacket",
    price: 285,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/k8ZHmkW/Men-Black-Solid-Windcheater-Bomber-Jacket-1.webp",
      imageUrl2: "https://i.ibb.co/wrym0CY/Men-Black-Solid-Windcheater-Bomber-Jacket-2.webp",
      imageUrl3: "https://i.ibb.co/ZXc4YL5/Men-Black-Solid-Windcheater-Bomber-Jacket-4.webp",
      imageUrl4: "https://i.ibb.co/9W44Pgg/Men-Black-Solid-Windcheater-Bomber-Jacket-3.webp"
    }
  },
  {
    category: "Jacket",
    name: "Men White & Yellow Colourblocked Sporty Jacket",
    price: 270,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/jTWxpP0/Men-White-Yellow-Colourblocked-Sporty-Jacket-1.jpg",
      imageUrl2: "https://i.ibb.co/9nk1kk5/Men-White-Yellow-Colourblocked-Sporty-Jacket-1.webp",
      imageUrl3: "https://i.ibb.co/4gfqkGH/Men-White-Yellow-Colourblocked-Sporty-Jacket-2.jpg",
      imageUrl4: "https://i.ibb.co/2Znn11M/Men-White-Yellow-Colourblocked-Sporty-Jacket-3.jpg"
      
    }
  },
  {
    category: "Jacket",
    name: "Man solid gray bomber jacket",
    price: 375,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/pf4GYBC/Man-solid-gray-bomber-jacket-1.jpg",
      imageUrl2: "https://i.ibb.co/0MPM2RS/Man-solid-gray-bomber-jacket-3.webp",
      imageUrl3: "https://i.ibb.co/D1fcMfk/Man-solid-gray-bomber-jacket-2.jpg",
      imageUrl4: "https://i.ibb.co/4FcdCT4/Man-solid-gray-bomber-jacket-2.webp"
     
    }
  },
  {
    category: "Jacket",
    name: "Men Black Solid Padded Jacket",
    price: 160,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/2nN52SJ/Men-Black-Solid-Padded-Jacket-1.webp",
      imageUrl2: "https://i.ibb.co/VNTxZ4q/Men-Black-Solid-Padded-Jacket-2.webp",
      imageUrl3: "https://i.ibb.co/jMpCjzQ/Men-Black-Solid-Padded-Jacket-3.webp"
    
    }
  },
  {
    category: "Jacket",
    name: "Men Blue Solid Bomber Jacket",
    price: 395,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/mJjVYCc/Men-Blue-Solid-Bomber-Jacket-1.jpg",
      imageUrl2: "https://i.ibb.co/GMVrwcC/Men-Blue-Solid-Bomber-Jacket-1.webp",
      imageUrl3: "https://i.ibb.co/fC0KLkB/Men-Blue-Solid-Bomber-Jacket-2.jpg",
      imageUrl4: "https://i.ibb.co/xCFn4mw/Men-Blue-Solid-Bomber-Jacket-3.jpg",
      imageUrl5: "https://i.ibb.co/vvDWKKy/Men-Blue-Solid-Bomber-Jacket-4.webp"
      
    }
  },
  {
    category: "Jacket",
    name: "Men Blue Solid Bombers Jacket",
    price: 365,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/MDrGHGN/Men-Blue-Solid-Bombers-Jacket-3.jpg",
      imageUrl2: "https://i.ibb.co/JjxdCCn/Men-Blue-Solid-Bombers-Jacket-3.webp",
      imageUrl3: "https://i.ibb.co/QXw926S/Men-Blue-Solid-Bombers-Jacket-4.jpg",
      imageUrl4: "https://i.ibb.co/5KZqfSF/Men-Blue-Solid-Bombers-Jacket-4.webp"
      
    }
  },
  {
    category: "Jacket",
    name: "Men Grey Solid Padded Jacket",
    price: 245,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/WF4XPkh/Men-Grey-Solid-Padded-Jacket-1.webp",
      imageUrl2: "https://i.ibb.co/Jt0BZPT/Men-Grey-Solid-Padded-Jacket-2.webp",
      imageUrl3: "https://i.ibb.co/MgCYL8b/Men-Grey-Solid-Padded-Jacket-3.webp",
      imageUrl4: "https://i.ibb.co/fYq4dfs/Men-Grey-Solid-Padded-Jacket-5.webp",
      imageUrl5: "https://i.ibb.co/bdsWQc4/Men-Grey-Solid-Padded-Jacket-6.webp"
     
    }
  },
  {
    category: "Jacket",
    name: "Men Maroon Solid Bomber Jacket",
    price: 437,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/tpk0Mkk/Men-Maroon-Solid-Bomber-Jacket-1.webp",
      imageUrl2: "https://i.ibb.co/pzkc4Bm/Men-Maroon-Solid-Bomber-Jacket-3.webp",
      imageUrl3: "https://i.ibb.co/Ntw3309/Men-Maroon-Solid-Bomber-Jacket-2.webp",
      imageUrl4: "https://i.ibb.co/YQ57hkx/Men-Maroon-Solid-Bomber-Jacket-1.jpg"
     
    }
  },
  {
    category: "Jacket",
    name: "Men Olive Green Solid Bomber Jacket",
    price: 565,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/7XyzmN8/Men-Olive-Green-Solid-Active-Bomber-Jacket-1.jpg",
      imageUrl2: "https://i.ibb.co/hmw6vfx/Men-Olive-Green-Solid-Active-Bomber-Jacket-1.webp",
      imageUrl3: "https://i.ibb.co/S6FzzLy/Men-Olive-Green-Solid-Active-Bomber-Jacket-2.jpg",
      imageUrl4: "https://i.ibb.co/r69S8Y6/Men-Olive-Green-Solid-Active-Bomber-Jacket-3.jpg",
      imageUrl5: "https://i.ibb.co/WWd18x8/Men-Olive-Green-Solid-Active-Bomber-Jacket-4.jpg"
      
    }
  },
  {
    category: "Jacket",
    name: "Men Red Bomber Jacket",
    price: 340,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/cygCfV4/Men-Red-Bomber-Jacket-1.webp",
      imageUrl2: "https://i.ibb.co/7YBgg5D/Men-Red-Bomber-Jacket-2.webp",
      imageUrl3: "https://i.ibb.co/1034KYx/Men-Red-Bomber-Jacket-4.webp",
      imageUrl4: "https://i.ibb.co/cLmq4VC/Men-Red-Bomber-Jacket-3.webp"
      
    }
  },
  {
    category: "Jacket",
    name: "Men Red Solid Bomber",
    price: 350,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/hCkmnwn/Men-Red-Solid-Bomber-1.webp",
      imageUrl2: "https://i.ibb.co/QkDx8M6/Men-Red-Solid-Bomber-2.webp",
      imageUrl3: "https://i.ibb.co/N2j8r0G/Men-Red-Solid-Bomber-3.webp",
      imageUrl4: "https://i.ibb.co/G3MJWHh/Men-Red-Solid-Bomber-4.webp"
    }
  }
  
];

export default function ManJacketCollection() {

  // const handleAddProduct = () => {
  //   axios.post('http://localhost:5000/addProducts', jacketCollections)
  //     .then(res => {
  //         alert('Product added successfully.')
  //     })
  // }

  const [menJacket, setMenJacket] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menJackets")
      .then((res) => res.json())
      .then((data) => setMenJacket(data));
  }, []);

    return (
      <>
      <div>
        <Topbar/>
        <Nav/>
        {/* <button onClick={handleAddProduct}>add products</button> */}
        <div className="container">
          <div class="row">
            <div className="col-md-3">
              <div className="sidebar-container">
                <SideBar/>
              </div>
            </div>
            <div className="col-md-9">
              <div className="mb-4 hoodieCollection-heading">
                  <div className="d-flex shoes-heading">
                  <h3>Jacket</h3> <span className="m">11 Products</span>
                    <div className="pb-3 hoodieCollection-path">
                      <small><span><a href="/">Home</a></span> / <span><a href="/mens/jacket">Men Jacket</a></span></small>
                    </div>
                  </div>
                  <div className="Filter-container d-flex">
                  <select name="Filter" id="Filter">
                    <option className="option" value="">New Arrivals</option>
                    <option className="option" value="">Most Popular</option>
                    <option className="option" value="">High Price</option>
                    <option className="option" value="">Low Price</option>
                    
                  </select>

                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input shadow-none" name="" id="" value="checkedValue"/>
                      Ship in 24 hours
                    </label>
                  </div>
                  </div>
                </div>
              <div className="hoodiesCollections">
                {
                  menJacket.map(menJacket => <ManJacket key={menJacket.key} menJacket={menJacket}></ManJacket>)
                }
              </div>
            </div>
          </div>
          
        </div>
        <SupportShiping/>
        <NewsletterContact/>
        <Footer/>
        <CopyRight/>
      </div>
    </>
    )
}
