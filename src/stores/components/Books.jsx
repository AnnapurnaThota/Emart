import React from 'react';
import {booksData} from '../Data/data/books'

const Books = () => {

    const firstFiveBooks= booksData.slice(0,5)
  return (
   <>
    <div className='proTitle'>
    <h2>Books</h2>
    </div>
     
     <div className='productsection'>
    {
       firstFiveBooks.map((item,id)=>{
          
            return(

                <div className='imageBox' key={id}>
                     <img className='productimage' src={item.image} alt='computer not found'/>

                </div>
                
            )
            
       })
    }
    </div>
   </>
  )
}

export default Books