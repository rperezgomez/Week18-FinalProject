import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Trail Booker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Trails</Nav.Link>
          <Nav.Link as={Link} to="/reservations">My Reservations</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
