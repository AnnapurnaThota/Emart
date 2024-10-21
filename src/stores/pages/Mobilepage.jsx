import React, { useState } from 'react';
import { mobileData } from '../Data/data/mobiles';
import {Navbar} from '../components/Navbar'

import { Link } from 'react-router-dom';


const Mobilepage = () => {

  const [selectedProduct,setSelectedProduct]= useState([]);

  console.log(selectedProduct)

  const companyHandler=(brand)=>{
    if(selectedProduct.includes(brand)){
      setSelectedProduct(selectedProduct.filter(item=> item !== brand))
    
      console.log(selectedProduct)
    } else{
      setSelectedProduct([...selectedProduct,brand])
     console.log(selectedProduct)
    }

  }

  console.log(selectedProduct)

  const filteredProduct= selectedProduct.length===0? mobileData : mobileData.filter((selectedbrand)=>selectedProduct.includes(selectedbrand.company))
  return (
    <>
    <Navbar/>
   <div className='page'>
    <div className='prodselect'>
         {
          mobileData.map((prod,id)=>{
            return(
                  <div key={id}>
                      <label>
                          <input type='checkbox' 
                                 checked={selectedProduct.includes(prod.company)}
                                 onChange={()=>companyHandler(prod.company)} 
                          />
                          {prod.company}
                      </label>
                  </div>
            )
          })
         }
    
    </div>
    <div className='pageSection'>
        {
            filteredProduct.map((item,id)=>{
                return (
                    <div key={id}>
                     
                    <Link to={`/mobile/${item.id}`}>
                    <div className='products'>
                          <img  src={item.image} alt='not found'/>
                    </div>
                    </Link>

                    <div className='promodel'>
         {item.company}, {item.model}
       
    </div>
    </div>
                )
            })
        }
    </div>
    </div>
    
    </>
  )
}

export default Mobilepage