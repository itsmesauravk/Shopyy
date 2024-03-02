import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

export const Shop = () => {
  return (
    <div className='main-shop' 
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      }}
    >
      <div style={{width:"70%"}}>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
      </div>

    </div>
  )
}
export default Shop

