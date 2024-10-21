import React from 'react'
import { menData } from '../Data/data/men'
import { Navbar } from '../components/Navbar'

const Menpage = () => {
  return (
    <>
    <Navbar/>
      <div className='pageSection'>
      {
        menData.map((item)=>{
            return(
                 <div className='products'>
                      <div>
                          <img src={item.image} alt='not allowed'/>
                      </div>
                      <div className='promodel'>
                           {item.brand}{item.model}
                      </div>
                 </div>

            )
          })
      }
         
      </div>
    </>
  )
}

export default Menpage