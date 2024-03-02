import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find(item => item.id === Number(productId))
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}
export default Product