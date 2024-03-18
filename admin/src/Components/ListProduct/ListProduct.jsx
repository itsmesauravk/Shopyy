import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllProduct(data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  const removeProduct =async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:id
      })
    })
    await fetchInfo();
  }

  return (
    <div className="listproduct">
      <h1>All Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : allProduct.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <>
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
            {allProduct.map((product, index) => (
              <div key={index} className="listproduct-format listproduct-product">
                <img src={product.image} alt="product" className="listproduct-product-image" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{removeProduct(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="remove_icon" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListProduct;
