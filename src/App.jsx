import './App.css'
import Kitchen from './stores/components/Kitchen';
import Landingpage from './stores/pages/Landingpage'
import { Routes,Route } from 'react-router-dom';
import Mobilepage from './stores/pages/Mobilepage';
import Acpage from './stores/pages/Acpage';
import Bookspage from './stores/pages/Bookspage';
import Computerpage from './stores/pages/computerpage';
import Fridgepage from './stores/pages/Fridgepage';
import Furniturepage from './stores/pages/Furniturepage';
import Kitchenpage from './stores/pages/Kitchenpage';
import Menpage from './stores/pages/Menpage';
import Watchespage from './stores/pages/Watchespage';
import Womenspage from './stores/pages/Womenspage';
import Speakerpage from './stores/pages/Speakerpage';
import Tvpage from './stores/pages/Tvpage';
import Mobilesingle from './singles/Mobilesingle';
import UserCart from './singles/UserCart';

export default function App(){

  return(
    <>
    <Routes>

        <Route path='/' element={ <Landingpage/>} />
        <Route path='/mobile' element={<Mobilepage/>} />
            <Route path='/mobile/:id' element={<Mobilesingle/>} />
        <Route path='/ac' element={<Acpage/>} />
        <Route path='/books' element={<Bookspage/>} />
        <Route path='/computer' element={<Computerpage/>} />
        <Route path='/fridge' element={<Fridgepage/>} />
        <Route path='/furniture' element={<Furniturepage/>} />
        <Route path='/kitchen' element={<Kitchenpage/>} />
        <Route path='/men' element={<Menpage/>} /> 
        <Route path='/watch' element={<Watchespage/>} />
        <Route path='/women' element={<Womenspage/>} /> 
        <Route path='/speaker' element={<Speakerpage/>} />
        <Route path='/tv' element={<Tvpage/>} /> 
        <Route path='/cart' element={<UserCart/>} />
    </Routes>
       

    </>
  )
}