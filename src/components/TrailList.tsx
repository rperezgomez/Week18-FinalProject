import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Import trail images from assets
import sunsetRidgeImg from '../assets/sunset-ridge.jpg';
import riverRunImg from '../assets/river-run.jpg';
import pineLoopImg from '../assets/pine-loop.jpg';
import summitChallengeImg from '../assets/summit-challenge.jpg';

//trail data including images
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
  // Initialize useNavigate to programmatically navigate to another route
  const navigate = useNavigate(); 

  return (
    // Bootstrap Container to hold the trail cards
    // Using responsive grid layout with rows and columns
    <Container className="mt-4"> 
      <Row xs={1} sm={2} md={2} lg={2} className="g-4">  
        {trails.map((trail) => ( 
          <Col key={trail.id}> 
            {/* Card component for each trail */}
            <Card style={{ height: '100%' }} className="shadow-sm"> 
              <Card.Img
                // Image for the trail card and its properties
                variant="top" 
                src={trail.image}
                alt={`Image of ${trail.title} trail`}
                style={{ height: '250px', objectFit: 'cover' }}
                // Lazy-load images for better performance
                loading="lazy"
              />
              <Card.Body>
                {/* Card body containing trail details */}
                <Card.Title>{trail.title}</Card.Title>  
                <Card.Text>{trail.description}</Card.Text> 
                <Button
                  variant="primary"
                  // Navigating to the trail details page on button click
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