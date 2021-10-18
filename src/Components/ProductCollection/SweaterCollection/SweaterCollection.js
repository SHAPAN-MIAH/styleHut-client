import React from 'react';
import { useState, useEffect } from 'react';
import Sweater from './Sweater';
import "./SweaterCollection.css"
// import axios from 'axios';

const sweatersCollection = [
  {
    category: "Sweater",
    name: "Wine give love Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/hfnMHpt/wine-give-love-sweater-dress-1.jpg",
      imageUrl2: "https://i.ibb.co/rwdQ3Pt/wine-give-love-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Black lace up Sweater",
    price: 122,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/tC4ZFxm/black-never-forget-you-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/zsrszFj/black-never-forget-you-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/KxMqkVk/black-never-forget-you-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Wine lace up Sweater",
    price: 125,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/WztgBws/wine-never-forget-you-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/ZVvsF74/wine-never-forget-you-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/p1nC5Tk/wine-never-forget-you-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Mauve lace up Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/R2XjPJ8/mauve-never-forget-you-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/HF3CGYq/mauve-never-forget-you-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/FY9SCKK/mauve-never-forget-you-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Taupe lace up Sweater",
    price: 130,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/K0G5ygx/taupe-never-forget-you-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/Rj95MwB/taupe-never-forget-you-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/vQSvbYW/taupe-never-forget-you-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Black-shallow waters lace up Sweater",
    price: 110,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/0mGBP1h/black-shallow-waters-lace-up-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/pnbpyXb/black-shallow-waters-lace-up-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/vswfpVd/black-shallow-waters-lace-up-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "White-cloudy neck Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/5Fzv23V/white-cloudy-days-v-neck-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/h85gnv7/white-cloudy-days-v-neck-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/qyy6NYq/white-cloudy-days-v-neck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Black-complicated distressed Sweater",
    price: 140,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/mtw0Fc4/black-complicated-distressed-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/VW4NkLH/black-complicated-distressed-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/3kLBRLH/black-complicated-distressed-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Ivory-twist it Sweater",
    price: 127,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/7QXWdNg/ivory-twist-it-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/zn1ySNV/ivory-twist-it-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/nMD4Nwy/ivory-twist-it-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Blush Sweater",
    price: 130,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/ykZyrTj/blush-so-lost-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/4m4fsys/blush-so-lost-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/8BSdvQq/blush-so-lost-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Camel-multi striped Sweater",
    price: 135,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/1sL8zW2/camel-multi-ready-or-not-striped-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/r767SHp/camel-multi-ready-or-not-striped-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/GJ7rKhj/camel-multi-ready-or-not-striped-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Natural-lace-up Sweater",
    price: 128,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/1KHHxMb/natural-dont-cross-me-lace-up-sweatshirt-2.jpg",
      imageUrl2: "https://i.ibb.co/H7c49H8/natural-dont-cross-me-lace-up-sweatshirt-1.jpg",
      imageUrl3: "https://i.ibb.co/8DMq8Sd/natural-dont-cross-me-lace-up-sweatshirt.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Ivory-jack gold sequin Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/gWPrfdy/ivory-jack-gold-sequin-sweater-3.jpg",
      imageUrl2: "https://i.ibb.co/yW1vhCx/ivory-jack-gold-sequin-sweater-2.jpg",
      imageUrl3: "https://i.ibb.co/BCKYfKD/ivory-jack-gold-sequin-sweater-1.jpg",
      imageUrl4: "https://i.ibb.co/P9ZBV9Z/ivory-jack-gold-sequin-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Blue-see-the-seams oversized soft Sweater",
    price: 142,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/HFLCx9m/blue-see-the-seams-oversized-soft-sweatshirt-4.jpg",
      imageUrl2: "https://i.ibb.co/s3V3B1G/blue-see-the-seams-oversized-soft-sweatshirt-3.jpg",
      imageUrl3: "https://i.ibb.co/bgH3hr3/blue-see-the-seams-oversized-soft-sweatshirt-2.jpg",
      imageUrl4: "https://i.ibb.co/txRCdJh/blue-see-the-seams-oversized-soft-sweatshirt-1.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Blue-go-to-pick-crew-neck Sweater",
    price: 115,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/vjsX73S/blue-go-to-pick-crew-neck-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/pQk5zfK/blue-go-to-pick-crew-neck-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/1sMn87r/blue-go-to-pick-crew-neck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Mauve-miracle-lace-up Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/XJvKM54/mauve-miracle-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/r7NXNR6/mauve-miracle-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/6sHP4CM/mauve-miracle-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Black-miracle-lace-up Sweater",
    price: 140,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/71zGnBW/black-miracle-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/FwRkMYr/black-miracle-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/JKRchHQ/black-miracle-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Wine-miracle-lace-up Sweater",
    price: 150,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/QQtxbJ8/wine-miracle-lace-up-sweater-dress-2.jpg",
      imageUrl2: "https://i.ibb.co/p3mnmF1/wine-miracle-lace-up-sweater-dress-1.jpg",
      imageUrl3: "https://i.ibb.co/XWDDpyR/wine-miracle-lace-up-sweater-dress.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Cream-lace-up-turtle-neck Sweater",
    price: 137,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/W3yhL70/cream-need-you-lace-up-turtle-neck-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/4ghP8r2/cream-need-you-lace-up-turtle-neck-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/3S9Q5cj/cream-need-you-lace-up-turtle-neck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Sage-cozy-up-intricate Sweater",
    price: 152,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Mpsmj9X/sage-cozy-up-with-me-intricate-detail-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/SmDVdx2/sage-cozy-up-with-me-intricate-detail-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/Hpm0yGH/sage-cozy-up-with-me-intricate-detail-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Slate-blue-oversized-side-ribbed Sweater",
    price: 140,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/vdCX4nG/slate-blue-come-thru-and-chill-oversized-side-ribbed-sweatshirt-4.jpg",
      imageUrl2: "https://i.ibb.co/dBf8T2n/slate-blue-come-thru-and-chill-oversized-side-ribbed-sweatshirt-3.jpg",
      imageUrl3: "https://i.ibb.co/2k3WCXr/slate-blue-come-thru-and-chill-oversized-side-ribbed-sweatshirt-2.jpg",
      imageUrl4: "https://i.ibb.co/bdWY37r/slate-blue-come-thru-and-chill-oversized-side-ribbed-sweatshirt-1.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Multi-franky-colorblock-turtleneck Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/KhnVBbh/multi-franky-colorblock-turtleneck-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/M2ndcp7/multi-franky-colorblock-turtleneck-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/VtVkQXG/multi-franky-colorblock-turtleneck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Multi-stack-it-up-mock-neck-colorblock Sweater",
    price: 110,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/GcMmkt8/multi-stack-it-up-mock-neck-colorblock-sweater-3.jpg",
      imageUrl2: "https://i.ibb.co/tHfQLyd/multi-stack-it-up-mock-neck-colorblock-sweater-2.jpg",
      imageUrl3: "https://i.ibb.co/9H1xVNN/multi-stack-it-up-mock-neck-colorblock-sweater-1.jpg",
      imageUrl4: "https://i.ibb.co/mSHtCNV/multi-stack-it-up-mock-neck-colorblock-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Charcoal-azalea-distressed-ribbed Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/4PBfqdv/charcoal-azalea-distressed-edges-ribbed-sweater-3.jpg",
      imageUrl2: "https://i.ibb.co/j5MRYN5/charcoal-azalea-distressed-edges-ribbed-sweater-2.jpg",
      imageUrl3: "https://i.ibb.co/TWhdPVG/charcoal-azalea-distressed-edges-ribbed-sweater-1.jpg",
      imageUrl4: "https://i.ibb.co/pJ1LKvb/charcoal-azalea-distressed-edges-ribbed-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Sage-multi-cotton-crew-neck Sweater",
    price: 160,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/WcY6Kf4/sage-multi-cotton-clouds-crew-neck-sweater-3.jpg",
      imageUrl2: "https://i.ibb.co/dbGmJcQ/sage-multi-cotton-clouds-crew-neck-sweater-2.jpg",
      imageUrl3: "https://i.ibb.co/0yY8WyJ/sage-multi-cotton-clouds-crew-neck-sweater-1.jpg",
      imageUrl4: "https://i.ibb.co/tLWypYm/sage-multi-cotton-clouds-crew-neck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Ivory-bree-collared-sweatshirt",
    price: 135,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/SnX4pzd/ivory-bree-collared-sweatshirt-4.jpg",
      imageUrl2: "https://i.ibb.co/t4HtkGZ/ivory-bree-collared-sweatshirt-3.jpg",
      imageUrl3: "https://i.ibb.co/KbrthZG/ivory-bree-collared-sweatshirt-2.jpg",
      imageUrl4: "https://i.ibb.co/VxmQkyn/ivory-bree-collared-sweatshirt-1.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Beige-candy-ribbed-crop sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/58tdPgP/beige-i-need-this-candy-ribbed-crop-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/m03YPnv/beige-i-need-this-candy-ribbed-crop-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/J78B5JF/beige-i-need-this-candy-ribbed-crop-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Pink-candy-ribbed-crop Sweater",
    price: 150,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/0nRdyV9/pink-i-need-this-candy-ribbed-crop-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/2nzj6s2/pink-i-need-this-candy-ribbed-crop-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/jD8TkkH/pink-i-need-this-candy-ribbed-crop-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Rainbow-long-sleeve-crop-top Sweater",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/t2vzxqL/rainbow-relax-already-tie-dye-long-sleeve-crop-top-2.jpg",
      imageUrl2: "https://i.ibb.co/sCpXSmb/rainbow-relax-already-tie-dye-long-sleeve-crop-top-1.jpg",
      imageUrl3: "https://i.ibb.co/bPjnWbT/rainbow-relax-already-tie-dye-long-sleeve-crop-top.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Tan-simple-crew-neck Sweater",
    price: 160,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/zhnG2n7/tan-simple-days-crew-neck-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/0cxnR0S/tan-simple-days-crew-neck-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/kXN6pzj/tan-simple-days-crew-neck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Blue-studious-v-neck-cable-knit-sweater",
    price: 150,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/5v3Wr4Y/Studious-V-Neck-Cable-Knit-Sweater-Vest-Blue.jpg",
      imageUrl2: "https://i.ibb.co/7G36KZN/Studious-V-Neck-Cable-Knit-Sweater-Vest-Blue.jpg",
      imageUrl3: "https://i.ibb.co/n72nM8K/Studious-V-Neck-Cable-Knit-Sweater-Vest-Blue.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Green-pistachio-cream-sweatshirt",
    price: 137,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Y7NXy3S/green-pistachio-cream-tie-dye-sweatshirt-3.jpg",
      imageUrl2: "https://i.ibb.co/NrF3gBb/green-pistachio-cream-tie-dye-sweatshirt-2.jpg",
      imageUrl3: "https://i.ibb.co/fNY16CT/green-pistachio-cream-tie-dye-sweatshirt-1.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Dusty-blush-creme-brulee-sweater",
    price: 145,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/k44bRgB/dusty-blush-creme-brulee-pinched-detail-mock-neck-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/HYXFpB7/dusty-blush-creme-brulee-pinched-detail-mock-neck-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/R0cysFc/dusty-blush-creme-brulee-pinched-detail-mock-neck-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Cream-celan-ribbed-wrap-sweater",
    price: 167,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/5jZZJJq/cream-caelan-ribbed-wrap-sweater-2.jpg",
      imageUrl2: "https://i.ibb.co/KXMTvJB/cream-caelan-ribbed-wrap-sweater-1.jpg",
      imageUrl3: "https://i.ibb.co/RPfj0HG/cream-caelan-ribbed-wrap-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Pink-hop-pullover sweater",
    price: 130,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/HNfvD4R/Hop-Around-Daisy-Floral-Pullover-Sweater-Pink-TOBWCAS5171.jpg",
      imageUrl2: "https://i.ibb.co/M15zWc9/Hop-Around-Daisy-Floral-Pullover-Sweater-Pink-TOBWCAS5171.jpg",
      imageUrl3: "https://i.ibb.co/z8LHMhb/Hop-Around-Daisy-Floral-Pullover-Sweater-Pink-TOBWCAS5171.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Tan-graciela-cuffed-sweater-cardigan-top",
    price: 120,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/r7NbHS7/tan-graciela-cuffed-sweater-cardigan-top-5.jpg",
      imageUrl2: "https://i.ibb.co/xDhgkP0/tan-graciela-cuffed-sweater-cardigan-top-4.jpg",
      imageUrl3: "https://i.ibb.co/hfBjX8Y/tan-graciela-cuffed-sweater-cardigan-top-3.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Light-pink-pockets-sweater-cardigan",
    price: 127,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/3WmZDTq/light-pink-sing-softly-pockets-sweater-cardigan-3.jpg",
      imageUrl2: "https://i.ibb.co/7yQHYJL/light-pink-sing-softly-pockets-sweater-cardigan-2.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Pink-multi-extra-passion-marbled sweater",
    price: 125,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/qsRKsvh/pink-multi-extra-passion-marbled-cable-knit-turtleneck-crop-sweater-1.jpg",
      imageUrl2: "https://i.ibb.co/Qd2JtNT/pink-multi-extra-passion-marbled-cable-knit-turtleneck-crop-sweater.jpg"
    }
  },
  {
    category: "Sweater",
    name: "Cream-multi-crewneck-pullover-sweater",
    price: 160,
    imagesUrl: {
      imageUrl1: "https://i.ibb.co/Gtj0vzL/cream-multi-rising-sun-crewneck-pullover-sweater-3.jpg",
      imageUrl2: "https://i.ibb.co/ss1BG3P/cream-multi-rising-sun-crewneck-pullover-sweater-2.jpg",
      imageUrl3: "https://i.ibb.co/gPMDVbb/cream-multi-rising-sun-crewneck-pullover-sweater-1.jpg"
    }
  }
  
]

const SweaterCollection = () => {

  const [sweater, setSweater] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sweaters")
      .then((res) => res.json())
      .then((data) => setSweater(data));
  }, []);

  // const handleAddProduct = () => {
  //   // fetch('http://localhost:5000/addSweaters')

  //   axios.post('http://localhost:5000/addSweaters', sweatersCollection)
  //     .then(res => {
  //         alert('Product added successfully.')
  //     })
  // }


  return (
    <div className="container">
      <div class="row">
        <div className="col-md-2">

        </div>
        <div className="col-md-10">
        <div className="sweaterCollections">
          {
           sweater.map(sweaterInfo => <Sweater key={sweaterInfo.key} sweaterInfo={sweaterInfo}></Sweater>)
          }
         </div>
        </div>
      </div>
    
      {/* <button onClick={handleAddProduct}>add products</button> */}
    </div>
  );
};

export default SweaterCollection;