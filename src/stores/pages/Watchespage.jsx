import React from 'react'
import { watchData} from '../Data/data/watch'
import { Navbar } from '../components/Navbar'

const Watchespage = () => {
  return (
    <>
        <Navbar/>
          <div className='pageSection'>
          {
              watchData.map((item)=>{
                return(
                    <div>
                         <div className='products'>
                             <img src={item.image} alt='not found'/>
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

export default Watchespage