import React, { useState } from 'react'
import './ListProduct.css'

const ListProduct = () => {

  const [allProduct,setAllProduct] = useState([]);
  
  const fetchInfo = async() =>{
    await fetch('http://localhost:4000/allproduct')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)})
  }
  return (
    <div className='listproduct'>
        <h1>All Product List</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproduct">
          <hr />

        </div>
    </div>
  )
}

export default ListProduct