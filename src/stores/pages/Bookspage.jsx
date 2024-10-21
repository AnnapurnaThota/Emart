import React from 'react';
import { booksData } from '../Data/data/books';
import { Navbar } from '../components/Navbar';

const Bookspage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
         {
            booksData.map((item)=>{
                return(
                    <>
                    <div className='products'>
                         <img src={item.image} alt='not found'/>

                    </div>
                    <div className='promodel'>
                    {item.author} {item.price}
                    </div>
                    </>
                )
            })
         }

    </div>
    
    </>
    
  )
}

export default Bookspage