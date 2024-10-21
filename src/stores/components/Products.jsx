import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Ac from './Ac';
import Books from './Books';
import Fridge from './Fridge';
import Furniture from './Furniture';
import Kitchen from './Kitchen';
import Men from './Men';
import Speakers from './Speakers';
import Mobilepage from '../pages/Mobilepage';
import Women from './Women';

export const Products = () => {
  return (
    <div>
         <Mobiles/>
         <Computers/>
         <Ac/>
         <Books/>
         <Fridge />
         <Furniture />
         <Kitchen/>
         <Men/>
         <Speakers/>
         <Women/>
    </div>

  )
}
