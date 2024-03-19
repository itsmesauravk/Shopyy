import React, { useEffect, useState } from 'react'
import './NewCollections.css'

import Item from '../Item/Item'

const NewCollection = () => {
  const [new_collection,setNew_Collection] = useState([])
  

  useEffect(()=>{
    fetch("http://localhost:4000/newcollections")
    .then((res)=>res.json())
    .then((data)=> setNew_Collection(data.new_collections))
  },[])
  return (
    <div className='newcollection'>
        <h1>New Collections</h1>
        <hr/>
        <div className='collections'>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection