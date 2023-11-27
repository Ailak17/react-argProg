import Card from 'react-bootstrap/Card';
import '../Item/item.css'
import paleta from './paleta.jpg'
import Button from 'react-bootstrap/Button';



function Item2 () {
  const alerta = () => {
    alert("¡Gracias por su compra!");
  };
  return (
    <Card style={{ width: '22rem' }} className='item'>
      <Card.Img src={paleta} rounded />
      <Card.Body>
        <Card.Title className='titulos'>Super Paleta Multicolor</Card.Title>
        <Card.Text className='descripcion'>Paleta de caramelo de distintos sabores y colores por 12 U.
        </Card.Text>
        <Card.Text>
            Codigo : 242424
        </Card.Text>
        <Card.Text>
            Quedan 5 unidades
        </Card.Text>
        <Card.Text className='precio'>
            $1500
        </Card.Text>
        <Button onClick={alerta} variant="light">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item2;