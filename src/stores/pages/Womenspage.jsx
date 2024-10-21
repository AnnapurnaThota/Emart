import React from 'react';
import {womanData} from '../Data/data/women'
import { Navbar } from '../components/Navbar';

const Womenspage = () => {
  return (
    <>
       <Navbar/>
        <div className='pageSection'>
        {
            womanData.map((item)=>{
               return(
                <div className='products'>
                    <div>
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

export default Womenspage