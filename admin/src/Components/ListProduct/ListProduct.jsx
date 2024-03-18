import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allProduct,setAllProduct] = useState([]);
  
  const fetchInfo = async() =>{
    await fetch('http://localhost:4000/allproduct')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)})
  }

  useEffect(()=>{
    fetchInfo();
  },[])
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
          {allProduct.map((product,index)=>{
            return(
              <div key={index} className="listproduct-format-main listproduct-product">
                <img src={product.image} alt="product" className='listproduct-product-image'/>
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img className='listproduct-remove-icom' src="" alt="" />
              </div>
            )

          }}
        </div>
    </div>
  )
}

export default ListProduct