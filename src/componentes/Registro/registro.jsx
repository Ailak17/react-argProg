import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './registro.css'

function Registro() {
  return (
    <div className='dforme'>
      
    <Form className='formulario'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Numero de telefono</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Registro;