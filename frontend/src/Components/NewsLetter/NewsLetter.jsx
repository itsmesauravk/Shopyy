import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to get our daily updates.</p>
        <div className='subscription-form'>
            <input type="email"  placeholder='example@gmail.com'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter