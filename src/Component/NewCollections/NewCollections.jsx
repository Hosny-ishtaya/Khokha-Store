import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
//import new_collections from '../Assets/new_collections'
import './NewCollections.css'
//import { json } from 'react-router-dom'
const NewCollections = () => {
  const [newcollections,setNewCollection]= useState([]);

  useEffect(()=>{
    
    fetch("http://localhost:4000/getnewcollections")
    .then((res)=>res.json())
    .then((data)=>setNewCollection(data))
   
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {
                newcollections.map((item,i)=>{
                    return <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                })
            }
        </div>
      
    </div>
  )
}

export default NewCollections
