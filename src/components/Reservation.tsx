import { Card, Button } from 'react-bootstrap';

// Defining the types for the props of the Reservation component
interface ReservationProps {
  reservation: { 
    // Defining the structure of the reservation prop
    id: string;
    name: string;
    date: string;
    participants: number;
    trailId: string;
    trailName: string;
  };
  // Callback function for handling the deletion of a reservation
  onDelete: () => void; 
}

// Reservation component - Displays details of a single reservation
export default function Reservation({ reservation, onDelete }: ReservationProps) {
  return (
    <Card className="mb-3">
      <Card.Body>
        {/* Title of the reservation */}
        <Card.Title>{reservation.name}</Card.Title>
        
        <Card.Text>
          {/* Displaying reservation details like trail name, date, and participants */}
          <strong>Trail:</strong> {reservation.trailName} <br />
          <strong>Trail ID:</strong> {reservation.trailId} <br />
          <strong>Date:</strong> {reservation.date} <br />
          <strong>Participants:</strong> {reservation.participants}
        </Card.Text>
        
        {/* Delete button, calls the onDelete function when clicked */}
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}