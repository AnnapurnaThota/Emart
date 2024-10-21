import React from 'react'
import {womanData }from '../Data/data/women'

const Women = () => {

    const firstFiveWomen= womanData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>WomenData</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveWomen.map((item,id)=>{
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

export default Women;