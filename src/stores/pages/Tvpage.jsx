import React from 'react'
import {tvData} from '../Data/data/tv'
import { Navbar } from '../components/Navbar'

const Tvpage = () => {
  return (
    <>
       <Navbar/>
      <div className='pageSection'>
      {
        tvData.map((item)=>{
            return(
                 <div className='products'>
                     <div>
                     <img src={item.image} alt='notdound'/>
                     </div>
                     <div className='promodel'>
                         {item.model} {item.price}
                     </div>

                 </div>
            )
        })
      }
      </div>
    </>
  )
}

export default Tvpage