import React from 'react'
import Item from '../Item/Item'
import './items.css'



const items = [{
    id:232323,
    titulo: 'Ferrero',
    descripcion: 'Chocolates con avellanas formados por una capa de barquillo rellena con pasta de cacao y avellanas, recubierta por una capa de chocolate con avellanas trituradas y una avellana entera en el interior, además de manteca de palma, envueltos en papel metalizado y colocados individualmente sobre un molde de papel engrasado.',
    imagen: "./ferrero.jpg" , 
    stock : 3,
    precio : 200

}, 
{
    id: 242424 ,
    titulo:'Super Paleta Multicolor',
    descripcion: 'Paleta de caramelo de distintos sabores y colores por 12 U.' ,
    imagen: './paleta.jpg',
    stock : 5,
    precio : 1500

},
{
    id: 252525 ,
    titulo:'Flynn Paff',
    descripcion: 'Caramelos Flynn Paff Masticables Sabor Tutti Frutti, sin tacc! ¡El caramelo mas grande de Argentina!' ,
    imagen: './caramelo.png',
    stock : 25 ,
    precio : 100

}

]
function Items() {
    console.log (items)
  return (
    <div className='cards'>
        {
        items.map(item  =>(
                <div className='cards' key={item.id}>
                    <Item titulo={item.titulo} descripcion={item.descripcion} id={item.id} imagen={item.imagen} stock={item.stock} precio={item.precio} />
                </div>
                
            ))
        };
    </div>
  )
}

export default Items