import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createReservation } from '../api/reservationApi';

// Local trail data (you can extract this to a shared file if needed)
const trails = [
  { id: '1', title: 'Sunset Ridge' },
  { id: '2', title: 'River Run' },
  { id: '3', title: 'Pine Loop' },
  { id: '4', title: 'Summit Challenge' }
];

export default function ReservationForm({ trailId }: { trailId: string }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState(1);

  // Find trail name from ID
  const trail = trails.find(t => t.id === trailId);
  const trailName = trail ? trail.title : 'Unknown Trail';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reservationData = {
      name,
      date,
      participants,
      trailId,
      trailName
    };

    try {
      await createReservation(reservationData);
      alert('Reservation created successfully!');
      // Reset form
      setName('');
      setDate('');
      setParticipants(1);
    } catch (error) {
      alert('Error creating reservation');
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Trail: {trailName}</h4>

      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Participants</Form.Label>
        <Form.Control
          type="number"
          min={1}
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Book Trail
      </Button>
    </Form>
  );
}