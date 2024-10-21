import React from 'react'
import { menData} from '../Data/data/men'

const Men = () => {

    const firstFiveMen= menData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Furniture</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveMen.map((item,id)=>{
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

export default Men