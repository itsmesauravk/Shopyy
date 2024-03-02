import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContex'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product, cartItems, removeFromCart} = useContext(ShopContext)
    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e,index)=>{
            if(cartItems[e.id]>0){
                return <div key={index}>
                            <div className="cartitems-format">
                                <img src={e.image} alt="cartimage" className='carticon-product-icon' />
                                <p className='itemname'>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='removeicon' src={remove_icon} onClick={()=>removeFromCart(e.id)} alt="remove" />
                            </div>
                            <hr />
                        </div>  
            }
            return null;

        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-items">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-items">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>Have PromoCode ??</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Apply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems