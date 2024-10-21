import React from 'react'
import { acData } from '../Data/data/ac'
import { Navbar } from '../components/Navbar'

const Acpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
    {
        acData.map((item)=>{
            return(
                  <div><div className='products'>  
                        
                    
                  <img src={item.image} alt='image not found'/>
                  </div>
                  <div className='promodel'>
                   {item.company} {item.model}
                   </div>
                   </div>
                )
        })
    }
    </div>
    </>
  )
}

export default Acpage