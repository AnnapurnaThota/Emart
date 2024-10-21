import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../singles/UserCart'




export const Navbar= () => {

      const {cartItems}= useCart(); 
      console.log(cartItems.length)
  return (
    <>
          <div className='navSection'>
          
          <div className='title'>
                <h2>E-Mart</h2>
          </div>
          <div className='search'>
                <input type='text' placeholder='search...'/>
          </div>
          <div className='user'>
                <div className='user-detail'>
                    sign In/signUp
                </div>

                <Link to='/cart'>
                <div className='cart'>cart
                 <span>{cartItems.length}</span>
                 </div>
                </Link>
          </div>
          

          </div>

          <div className='menulist'>
          <ul>
             <Link to='/mobile'>
                    <li>Mobiles</li>
             </Link>
              
             <Link to='/computer'>
             <li>Computers</li>
             </Link>
              
             <Link to='/watch'>
             <li>Watches</li>
             </Link>
             
              <Link to='/men'>
              <li>Menswear</li>
              </Link>
             
              <Link to='/women'>
              <li>Women wear</li>
              </Link>
              
              <Link to='/furniture'>
              <li>Furniture</li>
              </Link>
              
              <Link to='/kitchen'>
              <li>Kitchen</li>
              </Link>
              
              <Link to='/fridge'>
              <li>Fridge</li>
              </Link>
              
              <Link to='/books'>
              <li>Books</li>
              </Link>
              
              <Link to='/speaker'>
              <li>Speakers</li>
              </Link>
              
              <Link to='/tv'>
              <li>Tv</li>
              </Link>
              

              <Link to='/ac'>
              <li>Ac</li>
              </Link>
              
          </ul>
    </div>
         
    </>
  )
}
