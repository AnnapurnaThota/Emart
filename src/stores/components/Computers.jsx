import React from 'react'
import {computerData} from '../Data/data/computers.js'

const Computers = () => {

    const firstFiveComp= computerData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Computers</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveComp.map((item,id)=>{
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

export default Computers