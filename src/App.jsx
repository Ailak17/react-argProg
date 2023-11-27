import './App.css'
import Item from './componentes/Item/Item.jsx'
import Item2 from './componentes/Item2/Item2.jsx'
import Item3 from './componentes/Item3/item3.jsx'
import Nav1 from './componentes/nav/Nav.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registro from './componentes/Registro/registro.jsx'

function App() {
  return (
    <>
      <div className='fondo'>
        <BrowserRouter  >
        <Nav1/>
        <Routes>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/' element={ 
          <div>
          <h1 className='bienvenida'> ¡Bienvenidos a nuestra tienda de golosinas! </h1>
          <div className='cards'>
            <Item/>
            <Item2/>
            <Item3/>
          </div> </div>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
