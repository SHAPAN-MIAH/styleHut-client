import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Hoodie from './Hoodie';
import './HoodiesCollection.css'

const hoodieCollections = [
  {
    category: "Hoodie",
    name: "Marsala-concrete-city-oversized-hoodie",
    price: 185,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/fHH207J/marsala-concrete-city-oversized-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/X3YcJRp/marsala-concrete-city-oversized-hoodie-4.jpg",
      imageUrl3: "https://i.ibb.co/9GLcFjd/marsala-concrete-city-oversized-hoodie-5.jpg",
      imageUrl4: "https://i.ibb.co/ssFLj15/marsala-concrete-city-oversized-hoodie-3.jpg"
    }
  },
  {
    category: "Hoodie",
    name: "Beige-super-soft-fuzzy-hoodie",
    price: 170,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Np1MTnk/beige-super-soft-fuzzy-hoodie-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/FWjbZ7s/beige-super-soft-fuzzy-hoodie-sweater-1.jpg"
      
    }
  },
  {
    category: "Hoodie",
    name: "Black-concrete-oversized-hoodie",
    price: 175,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Y3swCYM/black-concrete-city-oversized-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/HpXm9xB/black-concrete-city-oversized-hoodie-3.jpg",
      imageUrl3: "https://i.ibb.co/9T3TTmn/black-concrete-city-oversized-hoodie-2.jpg"
     
    }
  },
  {
    category: "Hoodie",
    name: "Black-red-velvet-hoodie",
    price: 160,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/ygRjVgn/black-red-first-love-velvet-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/842BPtx/black-red-first-love-velvet-hoodie-1.jpg"
    
    }
  },
  {
    category: "Hoodie",
    name: "Charcoal-soft-fuzzy-hoodie",
    price: 155,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/WtWqNXf/charcoal-super-soft-fuzzy-hoodie-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/BN88jVv/charcoal-super-soft-fuzzy-hoodie-sweater-3.jpg",
      imageUrl3: "https://i.ibb.co/Stsnj5x/charcoal-super-soft-fuzzy-hoodie-sweater-4.jpg"
      
    }
  },
  {
    category: "Hoodie",
    name: "Grey-ultra-cropped-hoodie",
    price: 165,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Bf2FPLQ/lavender-sundae-sunday-tie-dye-cropped-hoodie-1.jpg",
      imageUrl2: "https://i.ibb.co/zrFKRP3/lavender-sundae-sunday-tie-dye-cropped-hoodie.jpg",
      imageUrl3: "https://i.ibb.co/0JY96T9/Lost-And-Found-Ultra-Cropped-Hoodie-Sweatshirt-Heather-Grey.jpg"
      
    }
  },
  {
    category: "Hoodie",
    name: "Mocha-ease-up-zip-hoodie",
    price: 145,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/1zj8R1T/mocha-ease-up-zip-up-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/LCQ5PZB/mocha-ease-up-zip-up-hoodie-1.jpg"
     
    }
  },
  {
    category: "Hoodie",
    name: "Natural-oversized-hoodie",
    price: 137,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/M7JhLPq/natural-concrete-city-oversized-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/SwhgRTG/natural-concrete-city-oversized-hoodie-5.jpg",
      imageUrl3: "https://i.ibb.co/8j2sRgr/natural-concrete-city-oversized-hoodie-6.jpg"
     
    }
  },
  {
    category: "Hoodie",
    name: "Red-oversized-hoodie",
    price: 165,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/mJjTzqj/red-concrete-city-oversized-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/QKTYHzx/red-concrete-city-oversized-hoodie-2.jpg",
      imageUrl3: "https://i.ibb.co/ZYzmQnZ/red-concrete-city-oversized-hoodie-1.jpg"
      
    }
  },
  {
    category: "Hoodie",
    name: "Wine-luna-lace-up-hoodie",
    price: 140,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/V9ZssJH/wine-luna-lace-up-cropped-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/9yYgsXJ/black-french-kiss-cropped-hoodie.jpg",
      imageUrl3: "https://i.ibb.co/Dbt6g7C/green-show-off-cropped-hoodie.jpg"
      
    }
  },
  {
    category: "Hoodie",
    name: "Wine-track-star-velvet-hoodie",
    price: 130,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/1L7XkZq/wine-track-star-velvet-hoodie.jpg",
      imageUrl2: "https://i.ibb.co/Vmq49wY/wine-track-star-velvet-hoodie-1.jpg"
    }
  }
  
]

const HoodiesCollection = () => {

  // const handleAddProduct = () => {
  //   axios.post('http://localhost:5000/addHoodies', hoodieCollections)
  //     .then(res => {
  //         alert('Product added successfully.')
  //     })
  // }

  const [hoodies, setHoodies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hoodies")
      .then((res) => res.json())
      .then((data) => setHoodies(data));
  }, []);

  return (
    <div className="container">
      <div class="row">
        <div className="col-md-2">

        </div>
        <div className="col-md-10">
        <div className="hoodiesCollections">
          {
           hoodies.map(hoodie => <Hoodie key={hoodie.key} hoodie={hoodie}></Hoodie>)
          }
         </div>
        </div>
      </div>
      {/* <button onClick={handleAddProduct}>add products</button> */}
    </div>
  );
};

export default HoodiesCollection;