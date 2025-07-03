import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Import trail images from assets
import sunsetRidgeImg from '../assets/sunset-ridge.jpg';
import riverRunImg from '../assets/river-run.jpg';
import pineLoopImg from '../assets/pine-loop.jpg';
import summitChallengeImg from '../assets/summit-challenge.jpg';

// Trail data with images
const trails = [
  {
    id: '1',
    title: 'Sunset Ridge',
    description: 'A scenic ridge with sunset views.',
    image: sunsetRidgeImg,
  },
  {
    id: '2',
    title: 'River Run',
    description: 'Follow the riverside with gentle slopes.',
    image: riverRunImg,
  },
  {
    id: '3',
    title: 'Pine Loop',
    description: 'Loop through pine forests and meadows.',
    image: pineLoopImg,
  },
  {
    id: '4',
    title: 'Summit Challenge',
    description: 'Steep climb up to a summit view.',
    image: summitChallengeImg,
  },
];

export default function TrailList() {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={2} lg={2} className="g-4">
        {trails.map((trail) => (
          <Col key={trail.id}>
            <Card style={{ height: '100%' }} className="shadow-sm">
              <Card.Img
                variant="top"
                src={trail.image}
                alt={`Image of ${trail.title} trail`}
                style={{ height: '250px', objectFit: 'cover' }}
                loading="lazy"
              />
              <Card.Body>
                <Card.Title>{trail.title}</Card.Title>
                <Card.Text>{trail.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/trails/${trail.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}