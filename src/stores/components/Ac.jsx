import React from 'react'
import {acData} from '../Data/data/ac'

const Ac = () => {

    const firstFiveImages= acData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>AC</h2>
    </div>
   
    <div className='productsection'>
        {
            firstFiveImages.map((item,id)=>{
                return(
                    <div className='imageBox' key={id}>
                        <img className='productimage' src={item.image} alt='mobiles image not found'/>
                    </div>
                ) 
            })
        }
    </div>
    </>
   
  )
}

export default Ac