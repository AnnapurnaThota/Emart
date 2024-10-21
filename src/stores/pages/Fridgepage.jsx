import React from 'react'
import { fridgeData } from '../Data/data/fridge'
import { Navbar } from '../components/Navbar'

const Fridgepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
    {
        fridgeData.map((item)=>{
            return(
                <>
              <div className='products'>
              <img src={item.image} alt='not found'/>
              </div>
              <div className='promodel'>
              {item.company}{item.price}
              </div>
              </>

            )
        })
    }</div>
    </>
  )
}

export default Fridgepage