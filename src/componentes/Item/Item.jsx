import Card from 'react-bootstrap/Card';
import './item.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Item ({titulo, imagen, id, stock, precio, descripcion} ) {
  const [compra, setCompra] =useState (true)
  return (
    <Card style={{ width: '22rem' }} className='item'>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className='titulos'>{titulo}</Card.Title>
        <Card.Text className='descripcion'>{descripcion}
        </Card.Text>
        <Card.Text>
            Codigo :{id}
        </Card.Text>
        <Card.Text>
            Quedan {stock} unidades
        </Card.Text>
        <Card.Text className='precio'>
            $ {precio}
        </Card.Text>
        
        <div className='boton' 
        ><Button  onClick={() => {setCompra(!compra)}} variant="light">Comprar {}</Button> 
        {compra ? (
        <div style={{ color: 'red' }}> </div>
      ) : (
        <div className='titulos' >Gracias por su compra</div>
      )}
      </div>

        
      </Card.Body>
    </Card>
  );
}

export default Item;