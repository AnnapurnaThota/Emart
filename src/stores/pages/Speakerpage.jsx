import React from 'react'
import { speakerData } from '../Data/data/speaker'
import { Navbar } from '../components/Navbar'

const Speakerpage = () => {
  return (
    <>
    <Navbar/>
       <div className='pageSection'>
          {
            speakerData.map((item)=>{
                return(
                    <div className='products'>
                        <div>
                             <img src={item.image} alt='not available'/>
                        </div>
                        <div className='promodel'>
                          {item.model}{item.price}
                        </div>

                    </div>
                )
            })
          }
       </div>
    </>
  )
}

export default Speakerpage