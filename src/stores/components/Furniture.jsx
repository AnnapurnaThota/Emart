import React from 'react';
import {furnitureData} from '../Data/data/furniture' 

const Furniture = () => {

const firstFiveFurniture= furnitureData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
    <h2>Furniture</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveFurniture.map((item,id)=>{
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

export default Furniture