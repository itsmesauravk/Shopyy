import React from 'react'
import './Item.css'


export const Item = (props) => {
  return (
    <div className='main'>
        <div className='item'>
            <img src={props.image} alt="Item" />
            <p>{props.name}</p>
            <div className='item-price'>
                <div className='item-price-new'>
                    <p>${props.new_price}</p>
                </div>
                <div className='item-price-old'>
                    <p>${props.old_price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Item