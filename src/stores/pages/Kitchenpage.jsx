import React from 'react'
import { kitchenData } from '../Data/data/kitchen'
import { Navbar } from '../components/Navbar'

const Kitchenpage = () => {
  return (
    <>
       <Navbar/>
        <div className='pageSection'>
        {
            kitchenData.map((item)=>{
                return(
                    <>
                    <div className='products'>
                         <img src={item.image} alt='not found'/>
                    </div>
                    <div className='promodel'>
                          {item.category}{item.price}
                    </div>
            </>
                )

            })
        }
           
            
        </div>
    </>
  )
}

export default Kitchenpage