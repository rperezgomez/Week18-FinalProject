import { Card, Button } from 'react-bootstrap';

interface ReservationProps {
  reservation: {
    id: string;
    name: string;
    date: string;
    participants: number;
    trailId: string;
    trailName: string;
  };
  onDelete: () => void;
}

export default function Reservation({ reservation, onDelete }: ReservationProps) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{reservation.name}</Card.Title>
        <Card.Text>
          <strong>Trail:</strong> {reservation.trailName} <br />
          <strong>Trail ID: {reservation.trailId}<br />
          <strong>Date:</strong></strong>{reservation.date} <br />
          <strong>Participants:</strong> {reservation.participants}
        </Card.Text>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}