import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import TrailPage from './components/TrailPage';
import ReservationPage from './components/ReservationPage';
import ReservationListPage from './components/ReservationListPage.tsx';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <Navbar />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trails/:id" element={<TrailPage />} />
          <Route path="/reserve/:trailId" element={<ReservationPage />} />
          <Route path="/reservations" element={<ReservationListPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;