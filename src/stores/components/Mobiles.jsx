import React from 'react';
import {mobileData} from '../Data/data/mobiles';

const Mobiles  = () => {

    const firstFiveImages= mobileData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
    <h2>Mobiles</h2>
    </div>
    
    <div className='productsection'>
        {
            firstFiveImages.map((item,i)=>{
                return(
                    <div className='imageBox' key={i} >
                        <img className='productimage' src={item.image} alt='mobiles image not found'/>
                    </div>
                ) 
            })
        }
    </div>
    </>
  )
}

export default Mobiles; 