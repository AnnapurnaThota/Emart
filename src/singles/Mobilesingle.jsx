import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../stores/Data/data/mobiles';

import { Navbar } from '../stores/components/Navbar';
import { useCart } from '../singles/UserCart'

const Mobilesingle = () => {

    const {id} = useParams();
    const {addToCart,cartItems}=useCart();


    const product= mobileData.find((item)=>item.id===id)
    console.log(id);
    console.log(product)
  return (
    <>
    <Navbar/>
    
    <div className='ind-page'>
        <div className='ind-image'>
            <img src={product.image} alt='not found'/>

        </div>
        <div className='ind-detail'>
           <div className='ind-company'>
             <h3>{product.company}</h3>
           </div>
        <div className='ind-model'>
            <h3>{product.model}</h3>
        </div>
        <div className='ind-price'>
            <h3>{product.price}</h3>
        </div>
        <div className='ind-desc space'>
           <p>{product.description}</p>
        </div>
        <button onClick={()=>addToCart(product)}>Add to cart</button>
        
       </div>
    </div>
  </>
  )
}

export default Mobilesingle