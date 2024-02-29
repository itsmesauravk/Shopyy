import React from 'react'
import './Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

export const Hero = () => {
  return (
    <div className='main-hero'>
        <div className='hero'>
            <div className='hero-left'>
                <h2>New Arriavals Only </h2>
                <div>
                    <div className='hand-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="Hand Icon" /> 
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>

            <div className='hero-right'>
                <img src={hero_image} alt="hero_image" />
            </div>

        </div>

    </div>
  )
}
export default Hero