import { Card, Button } from 'react-bootstrap';

// Trail component accepts a trail object and an onView function as props
export default function Trail({ trail, onView }: { trail: any; onView: () => void }) {
  return (
    <Card>
      <Card.Body>
        {/* Displaying the trail title */}
        <Card.Title>{trail.title}</Card.Title>
        
        {/* Displaying the trail description */}
        <Card.Text>{trail.description}</Card.Text>
        
        {/* Button that triggers the onView function when clicked */}
        <Button onClick={onView}>View Details</Button>
      </Card.Body>
    </Card>
  );
}