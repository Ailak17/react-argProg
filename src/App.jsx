import './App.css'

import Nav1 from './componentes/nav/Nav.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registro from './componentes/Registro/registro.jsx'
import Items from './componentes/Items/items.jsx'

function App() {
  return (
    <>
      <div className='fondo'>
        <BrowserRouter  >
        <Nav1/>
        <Routes>
          
          <Route path='/' element={ 
          <div>
          <h1 className='bienvenida'> ¡Bienvenidos a nuestra tienda de golosinas! </h1>
          <div className='cards'>
            <Items/>
          </div> </div>}/>
          <Route path='/registro' element={<Registro/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
