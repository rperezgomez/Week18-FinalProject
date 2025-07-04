//using api of choice craete react app with react router and bootstrap
//Have at least 3 pages
//have a least 10 components
//Allow for all CRUD operations via API

// Importing necessary libraries and components
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import TrailPage from './components/TrailPage';
import ReservationPage from './components/ReservationPage';
import ReservationListPage from './components/ReservationListPage.tsx';
import AboutPage from './components/AboutPage';

// Main App component
function App() {
  return (
    <>
      {/* Navbar appears on all pages since it's outside the Routes */}
      <Navbar />
      
      {/* Bootstrap Container to ensure content is centered and properly spaced */}
      <Container className="my-4">
        {/* Setting up React Router Routes */}
        <Routes>
          {/* Route for the main page (home page) */}
          <Route path="/" element={<MainPage />} />
          
          {/* Route for a specific trail page, dynamic id */}
          <Route path="/trails/:id" element={<TrailPage />} />
          
          {/* Route for reservation page, dynamic trailId */}
          <Route path="/reserve/:trailId" element={<ReservationPage />} />
          
          {/* Route for listing all reservations */}
          <Route path="/reservations" element={<ReservationListPage />} />
          
          {/* Route for the about page */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;