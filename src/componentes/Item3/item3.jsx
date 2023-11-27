import Card from 'react-bootstrap/Card';
import '../Item/item.css'
import caramelo from './caramelo.png'
import Button from 'react-bootstrap/Button';



function Item3 () {
  const alerta = () => {
    alert("¡Gracias por su compra!");
  };
  return (
    <Card style={{ width: '22rem' }} className='item'>
      <Card.Img src={caramelo} rounded />
      <Card.Body>
        <Card.Title className='titulos'>Flynn Paff</Card.Title>
        <Card.Text className='descripcion'>Caramelos Flynn Paff Masticables Sabor Tutti Frutti, sin tacc! 
        ¡El caramelo mas grande de Argentina!
        </Card.Text>
        <Card.Text>
            Codigo : 252525
        </Card.Text>
        <Card.Text>
            Quedan 25 unidades
        </Card.Text>
        <Card.Text className='precio'>
            $100
        </Card.Text>
        <Button onClick={alerta} variant="light">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item3;