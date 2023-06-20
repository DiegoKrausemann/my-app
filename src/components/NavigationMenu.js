import {Container, Navbar, Nav} from 'react-bootstrap';

function NavigationMenu() {
  return (
    <Navbar bg="primary" variant="ligth">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">perfil</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavigationMenu;