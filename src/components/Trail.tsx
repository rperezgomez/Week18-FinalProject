import { Card, Button } from 'react-bootstrap';

export default function Trail({ trail, onView }: { trail: any; onView: () => void }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{trail.title}</Card.Title>
        <Card.Text>{trail.description}</Card.Text>
        <Button onClick={onView}>View Details</Button>
      </Card.Body>
    </Card>
  );
}