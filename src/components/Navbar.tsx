import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

// MyNavbar component defines the top navigation bar for the app
export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>  {/* Bootstrap container to ensure proper alignment */}
        {/* Navbar brand linking to the home page */}
        <Navbar.Brand as={Link} to="/">Trail Booker</Navbar.Brand>
        
        {/* Navigation links */}
        {/* 'me-auto' ensures that the nav links are aligned to the left */}
        <Nav className="me-auto">
          {/* Each Nav.Link renders a link that behaves like a regular anchor tag but using React Router */}
          <Nav.Link as={Link} to="/">Trails</Nav.Link>
          <Nav.Link as={Link} to="/reservations">My Reservations</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
