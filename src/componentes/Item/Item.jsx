import Card from 'react-bootstrap/Card';
import './item.css'
import ferrero from './ferrero.jpg'
import Button from 'react-bootstrap/Button';



function Item () {
  const alerta = () => {
    alert("¡Gracias por su compra!");
  };
  return (
    <Card style={{ width: '22rem' }} className='item'>
      <Card.Img src={ferrero} rounded />
      <Card.Body>
        <Card.Title className='titulos'>Ferrero Rocher</Card.Title>
        <Card.Text className='descripcion'>Chocolates con avellanas formados por una capa de barquillo rellena con pasta de cacao y avellanas, recubierta por una capa de chocolate con avellanas trituradas y una avellana entera en el interior, además de manteca de palma, envueltos en papel metalizado y colocados individualmente sobre un molde de papel engrasado.
        </Card.Text>
        <Card.Text>
            Codigo : 232323
        </Card.Text>
        <Card.Text>
            Quedan 3 unidades
        </Card.Text>
        <Card.Text className='precio'>
            $1200
        </Card.Text>
        <Button onClick={alerta} variant="light">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;