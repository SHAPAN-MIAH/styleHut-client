import React from 'react';
import swtearImg from '../../assets/images/product-clothes-15_ccda53b5-213e-4168-82fd-6d02c77dac26.jpg';
import womens from '../../assets/images/img_2_2.jpg';
import mens from '../../assets/images/img_2_3.jpg';
import shoes from '../../assets/images/img_2_6.jpg';
// import lingerie from '../../assets/images/9a124cea2d4d837a49d4f3a5d160babc_adobespark.png';
import './Category.css'

const Category = () => {
  return (
    <>
     <div className="container CategorySection">
       <div className="category-heading">
          <h1>Shop By Category</h1>
          
       </div>
       <div className="row">
         <div className="col-md-3 categoryDiv">
           <div className=" SubCategoryDiv man-hoodie">
             {/* <img src={lingerie} alt=""/> */}
             <img src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/13305627-1-greymarl_720x.jpg?v=1582026492' alt=""/>
           </div>
           <div className=" SubCategoryDiv womans">
             <img src={womens} alt=""/>
           </div>
         </div>
         <div className="col-md-3">
           <div className="categoryDiv man">
           <img src={mens} alt=""/>
           </div>
         </div>
         <div className="col-md-6 categoryDiv">
           <div className="row">
            <div className="col-md-6">
              <div className="SubCategoryDiv watch">
              <img src='https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p24-11_720x.jpg?v=1581557817' alt=""/>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="SubCategoryDiv tops">
              <img src='https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_5_720x.jpg?v=1581782315' alt=""/>
              </div>
            </div>
            </div>
            <div className="SubCategoryDiv shoes">
              <img src={shoes} alt=""/>
            </div>
         </div>
       </div>
     </div> 
    </>
  );
};

export default Category;