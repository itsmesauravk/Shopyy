import React, { useState } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu,setMenu] = useState("shops")

  return (
    <div className='navbar'>
        <div className='main'>
        <div className='nav-logo'>
            <img src={logo} alt="Logo" />
            <p><b>SHOPYY</b></p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => { setMenu("shops") }}>
                <Link
                style={{textDecoration: 'none'}}
                 to={'/'}>
                    Shop {menu === 'shops' ? <hr /> : <></>}
                </Link>
            </li>
            <li onClick={() => { setMenu("mens") }}>
                <Link
                style={{textDecoration: 'none'}}
                 to={'/mens'}>
                    Men {menu === 'mens' ? <hr /> : <></>}
                </Link>
            </li>
            <li onClick={() => { setMenu("womens") }}>
                <Link
                style={{textDecoration: 'none'}}
                 to={'/womens'}>
                    Women {menu === 'womens' ? <hr /> : <></>}
                </Link>
            </li>
            <li onClick={() => { setMenu("kids") }}>
                <Link
                style={{textDecoration: 'none'}}
                 to={'/kids'}>
                    Kids {menu === 'kids' ? <hr /> : <></>}
                </Link>
            </li>
        </ul>
        <div className='nav-login-cart'>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
            <Link to={'/cart'}>
                <img src={cart_icon} alt="Cart" />
            </Link>
            <div className='nav-cart-count'>0</div>
        </div>
        </div>

    </div>
  )
}

export default Navbar