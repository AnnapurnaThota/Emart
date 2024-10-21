import React from 'react';
import { useCart } from '../stores/context/cartcontext';
import { Navbar } from '../stores/components/Navbar';
const UserCart = () => {

    const {cartItems,addToCart}=useCart();
  return (
    <>
    <Navbar/>
    <div>
    {
        cartItems.map((item,id)=>{
            return(
                <div className='cart-section'  key={id}>
                    <div className='cart-image'>
                        <img src={item.image} alt='not found'/>

                    </div>
                    <div className='cart-details'>
                         <h3>{item.product}</h3>
                         <h2>{item.price}</h2>
                         <h3>{item.model}</h3>
                    </div>
                </div>
            )
        })
    }</div>
    </>
  )
}

export default UserCart;