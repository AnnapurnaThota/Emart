import React from 'react'
import { furnitureData } from '../Data/data/furniture'
import { Navbar } from '../components/Navbar'

const Furniturepage = () => {
  return (
    <>
    <Navbar/>
       <div className='pageSection'>
        {
            furnitureData.map((item)=>{
              return(  <div>
                       <div className='products'>
                            <img src={item.image} alt='not availbale'/>
                       </div>
                       <div className='promodel'>
                          {item.brand} {item.model}
                       </div>
                </div>)
            })
        }
       </div>
    </>
  )
}

export default Furniturepage