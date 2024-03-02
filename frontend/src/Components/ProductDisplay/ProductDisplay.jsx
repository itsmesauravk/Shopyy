import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="Product" />
                <img src={product.image} alt="Product" />
                <img src={product.image} alt="Product" />
                <img src={product.image} alt="Product" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_dull_icon} alt="star" />
            </div>
            <p>(1012)</p>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
            Cloth quality: A measure of fabric excellence, influencing durability, comfort, and aesthetics in garments.
            A measure of fabric excellence, influencing durability, comfort, and aesthetics in garments.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>Add To Cart</button>
            <p className="productdisplay-right-category">
                <span>Category:</span><span> Women, T-Shirt, Crop Top</span>
            </p>
            <p className="productdisplay-right-category">
                <span>Tags:</span><span> Modern, Latest</span>
            </p>
        </div>

    </div>
  )
}

export default ProductDisplay