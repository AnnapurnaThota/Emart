import React from 'react'
import {kitchenData} from '../Data/data/kitchen'
const Kitchen = () => {

    const firstFiveKitchen= kitchenData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Kitchen</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveKitchen.map((item,id)=>{
            return(
                <div className='imageBox' key={id}>
                     <img className='productimage' src={item.image} alt='computer not found'/>
                </div>
            )
       })
    }
    </div>
    </>
  )
}

export default Kitchen