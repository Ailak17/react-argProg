import './App.css'
import Item from './componentes/Item/Item.jsx'
import Nav1 from './componentes/nav/Nav.jsx'

function App() {
  return (
    <>
      <div className='fondo'>
      <Nav1/>
      <h1 className='bienvenida'> ¡Bienvenidos a nuestra tienda de golosinas! </h1>
      <Item/>
      </div>
    </>
  )
}

export default App
