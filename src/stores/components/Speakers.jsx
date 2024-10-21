import React from 'react';
import { speakerData } from '../Data/data/speaker'; 

const Speakers = () => {

    const firstFiveSpeakers =  speakerData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Speakers</h2>
    </div>
    
    <div className='productsection'>
    {
       firstFiveSpeakers.map((item,id)=>{
            return(
                <div className='imageBox' key={id}>
                     <img className='productimage' src={item.image} alt='speaker not found'/>
                </div>
            )
       })
    }
    </div>
    </>
  )
}

export default Speakers;