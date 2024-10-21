import React from 'react'
import {fridgeData }from '../Data/data/fridge'

const Fridge = () => {

    const firstFiveFridge= fridgeData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Fridge</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveFridge.map((item,id)=>{
            return(
                <div className='imageBox'key={id}>
                     <img className='productimage' src={item.image} alt='computer not found'/>
                </div>
            )
       })
    }``
    </div>
    </>
  )
}

export default Fridge