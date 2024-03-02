import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContex'
import dropDown from  '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banner" />
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-short'>
          Sort by <img src={dropDown} alt="drop" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,index) => {
          if(props.category === item.category){
            return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />

          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory