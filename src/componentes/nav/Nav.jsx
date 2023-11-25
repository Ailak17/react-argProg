import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"
import dulce from './dulce.png'

function Nav1() {
  return (
    <Navbar expand="lg" className="navcss"  >
      <Container fluid>
        <Navbar.Brand href="#" className='fuente titu'>Tienda de golosinas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='contrac'>Home</Nav.Link>
            <Nav.Link href="#action2" className='contrac'>Productos</Nav.Link>
            <NavDropdown title="Redes" className='contrac' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='contrac'>Mail</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='contrac'>
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='contrac'>
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Container>
          <Navbar.Brand href="#home">
            <img
              src={dulce}
              width="20%"
              className='imge'
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;