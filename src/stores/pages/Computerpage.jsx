import React from 'react'
import { Navbar } from '../components/Navbar';
import { computerData } from '../Data/data/computers';

const Computerpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
    { 
        computerData.map((item)=>{
            return(
                <div>
                <div className='products'>
                    <img src={item.image} alt='notfound'/>
                </div>
                <div className='promodel'>
                {item.company} {item.category}
                </div>
                </div>
            )
        })
          
    }
    </div>
    </>
  )
}

export default Computerpage