import { useState } from 'react';
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null)

  const handelImgUpload = (event) => {
      console.log(event.target.files[0])
      const imageData = new FormData();
      imageData.set('key', '282791da900bc047d811a5c2dcf9f3f5');
      imageData.append('image', event.target.files[0])
      
      axios.post('https://api.imgbb.com/1/upload',imageData)
      // .then(res => setImageUrl(res.data.data.display_url))
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const onSubmit = (data) => {
      console.log(data)
      const productData = {
          name : data.name,
          category: data.category,
          price: data.price,
          imageUrlOne: imageUrl
      };
      console.log(productData)
      axios.post('http://localhost:5000/addProducts', productData)
      .then(res => {
          alert('Product added successfully.')
      })
  }

  return (
    <>
      <div className="AddTeamForm-container mt-5">
        <h4>Add Team Member</h4>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input type="text" {...register("name")} name="name" placeholder="Product Name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory1">Category</label>
            <input type="text" {...register("category")} name="category" placeholder="Category" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory1">Price</label>
            <input type="text" {...register("price")} name="price" placeholder="Price" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputImage1">Upload a image</label> <br/>
            <input onChange={handelImgUpload} type="file" id="imgInput" name="image" className="form-control"/>
          </div>
         
                                  
          <div className="form-group text-right">
            <button type="submit" className="ProductsAddBtn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;