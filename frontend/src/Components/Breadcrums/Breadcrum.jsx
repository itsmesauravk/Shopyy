import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="icon" /> SHOP <img src={arrow_icon} alt="icon" /> {product.category} <img src={arrow_icon} alt="icon" /> {product.name}
    </div>
  )
}

export default Breadcrum