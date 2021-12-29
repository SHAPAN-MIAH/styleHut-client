import React, { useEffect } from 'react';
import './WomenShoesCollection.css';
import { useState } from 'react';
import axios from 'axios';
import Topbar from '../../Shared/Topbar';
import Nav from './../../Shared/Nav';
import SupportShiping from '../../SupportShipingPayment/SupportShiping';
import NewsletterContact from '../../NewsletterContact/NewsletterContact';
import Footer from '../../Shared/Footer/Footer';
import CopyRight from '../../Shared/CopyRight/CopyRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faBars } from '@fortawesome/free-solid-svg-icons';
import Shoes from './Shoes/Shoes';
import SideBar from '../../Shared/SideBar/SideBar';
import './WomenShoesCollection.css'
import NewArrivals from './../../NewArrivals/NewArrivals';

const womenShoesCollections = [

  {
    category: "Shoes",
    name: "Brown silk shoes",
    price: 110,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/cbXF0kP/20210308silk1550.jpg",
      imageUrl2: "https://i.ibb.co/gDNdWgy/301-586x800.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-and-white-emy-pointed-flats",
    price: 255,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Krn2q05/black-and-white-emy-pointed-flats.jpg",
      imageUrl2: "https://i.ibb.co/DrZm1bg/black-and-white-emy-pointed-flats-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-square-toe-sandals",
    price: 250,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/612NLtN/black-at-last-square-toe-sandals-1.jpg",
      imageUrl2: "https://i.ibb.co/CmhvN6v/black-at-last-square-toe-sandals.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-callie-square-ankle-strap-heels",
    price: 320,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/P1yX1ZS/black-callie-square-toe-ankle-strap-heels-1.jpg",
      imageUrl2: "https://i.ibb.co/BnFfF1k/black-callie-square-toe-ankle-strap-heels-2.jpg",
      imageUrl3: "https://i.ibb.co/pKgg1dF/black-callie-square-toe-ankle-strap-heels.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-electric-faux-leather-ankle-strap-sandals",
    price: 185,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/r25BrdD/black-electric-faux-leather-ankle-strap-sandals.jpg",
      imageUrl2: "https://i.ibb.co/ZHyK07c/black-electric-faux-leather-ankle-strap-sandals-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-ember-faux-leather-mules",
    price: 155,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/7tSN2JH/black-ember-faux-leather-mules.jpg",
      imageUrl2: "https://i.ibb.co/Jj4Y1tj/black-ember-faux-leather-mules-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-feel-special-sneakers",
    price: 385,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/b59BdVy/black-feel-special-sneakers.jpg",
      imageUrl2: "https://i.ibb.co/pdtNmCB/black-feel-special-sneakers-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-gleamin-faux-patent-lace-up-sneakers",
    price: 380,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/cgT8cM7/black-gleamin-faux-patent-lace-up-platform-sneakers-1.jpg",
      imageUrl2: "https://i.ibb.co/2jBKrt6/black-gleamin-faux-patent-lace-up-platform-sneakers.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-hazy-square-strap-sandals",
    price: 135,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/8NLpnnY/black-hazy-square-strap-sandals.jpg",
      imageUrl2: "https://i.ibb.co/fFBXrMS/black-hazy-square-strap-sandals-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-jam-rhinestone-strap-heels",
    price: 275,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/2ktp7C0/black-jam-rhinestone-strap-heels.jpg",
      imageUrl2: "https://i.ibb.co/RDR8jw3/black-jam-rhinestone-strap-heels-2.jpg",
      imageUrl3: "https://i.ibb.co/gjnHy9F/black-jam-rhinestone-strap-heels-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-jax-chunky-lace-up-boots",
    price: 340,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/DfrLPyg/black-jax-chunky-lace-up-platform-boots-1.jpg",
      imageUrl2: "https://i.ibb.co/xGt6WX5/black-jax-chunky-lace-up-platform-boots.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-marc-faux-suede-flats",
    price: 325,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/5nqffqT/black-marc-faux-suede-pointed-dorsay-flats-1.jpg",
      imageUrl2: "https://i.ibb.co/S3Xcypv/black-marc-faux-suede-pointed-dorsay-flats.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-play-no-games-strappy-heels",
    price: 245,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/ZHd8NT6/black-play-no-games-strappy-heels.jpg",
      imageUrl2: "https://i.ibb.co/phN6yVz/black-play-no-games-strappy-heels-2.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-positano-faux-suede-espadrilles",
    price: 295,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/PhdHt0b/black-positano-faux-suede-espadrilles.jpg",
      imageUrl2: "https://i.ibb.co/XCMJYmn/black-positano-faux-suede-espadrilles-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Black-prema-faux-leather-combat-boots",
    price: 385,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/wQR5Q12/black-prema-faux-leather-combat-boots.jpg",
      imageUrl2: "https://i.ibb.co/9qkLGyq/black-prema-faux-leather-combat-boots-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Relaxation-slippers",
    price: 100,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/f85NQy5/black-relaxation-slippers-1.jpg",
      imageUrl2: "https://i.ibb.co/fC1SQMG/black-relaxation-slippers.jpg",
      imageUrl3: "https://i.ibb.co/hKLCMX4/bubble-gum-pink-relaxation-slippers.jpg",
      imageUrl4: "https://i.ibb.co/kMj27n0/chai-relaxation-slippers.jpg"
    }
  },
  {
    category: "Shoes",
    name: "White-prema-faux-leather-combat-boots",
    price: 350,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/nMKhG0f/white-prema-faux-leather-combat-boots-1.jpg",
      imageUrl2: "https://i.ibb.co/MPpssWL/white-prema-faux-leather-combat-boots.jpg"
    }
  },
  {
    category: "Shoes",
    name: "Red-logic-suede-heeled-booties",
    price: 370,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/fDzD0dn/red-logic-suede-heeled-booties.jpg",
      imageUrl2: "https://i.ibb.co/FspJj6L/red-logic-suede-heeled-booties-1.jpg"
    }
  },
  {
    category: "Shoes",
    name: "White-tanya-ankle-strap-sandals",
    price: 370,
    description1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione totam ipsam nulla, eaque vitae optio quod doloribus reiciendis voluptatibus.",
    description2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae expedita quasi sunt, vel dolores quia quidem ipsam nulla officiis tempora?",
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/phT9kv6/white-tanya-ankle-strap-sandals.jpg",
      imageUrl2: "https://i.ibb.co/Hnd4zZZ/white-tanya-ankle-strap-sandals-1.jpg"
    }
  },
]

const WomenShoesCollection = () => {
  const [shoesCollection, setShoesCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/womenShoes")
      .then((res) => res.json())
      .then((data) => setShoesCollection(data));
  }, []);

  // const handleAddProduct = () => {
  //   // fetch('http://localhost:5000/addSweaters')

  //   axios.post('http://localhost:5000/addWomenShoes', womenShoesCollections)
  //     .then(res => {
  //         alert('Product added successfully.')
  //     })
  // }

  return (
    <>
      <div>
        <Topbar/>
        <Nav/>
          <div className="container">
            <div class="row">
              <div className="col-md-3">
                <div className="sidebar-container">
                  <SideBar/>
                </div>
              </div>
              <div className="col-md-9">
                <div className="mb-4 shoesCollection-heading">
                  <div className="d-flex shoes-heading">
                    <h3>Shoes</h3> <span className="m"> 19 Products</span>
                    <div className=" shoesCollection-path">
                      <small> <span><a href="/">Home</a></span> /<span><a href="/women/shoes">Women Shoes</a></span> </small>
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
                <div className="shoesCollections">
                  {
                    shoesCollection.map(shoesInfo => <Shoes key={shoesInfo.key} shoesInfo={shoesInfo}></Shoes>)
                  }
                </div>
              </div>
            </div>

            {/* <button onClick={handleAddProduct}>add products</button> */}
          </div>
          <SupportShiping/>
          <NewsletterContact/>
          <Footer/>
          <CopyRight/>
      </div>
    </>
  );
};

export default WomenShoesCollection;