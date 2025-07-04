import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createReservation } from '../api/reservationApi';

// Local trail data
const trails = [
  { id: '1', title: 'Sunset Ridge' },
  { id: '2', title: 'River Run' },
  { id: '3', title: 'Pine Loop' },
  { id: '4', title: 'Summit Challenge' }
];

interface ReservationFormProps {
  // The selected trail ID is passed as a prop
  trailId: string;  
}

export default function ReservationForm({ trailId }: ReservationFormProps) {
  // State variables to store user input
  const [name, setName] = useState('');  
  const [date, setDate] = useState('');  
  const [participants, setParticipants] = useState(1);  

  // Find the trail title from the passed trailId
  // Searching for the trail using the trailId
  const trail = trails.find(t => t.id === trailId);
  // If trail is found, use its title, else 'Unknown Trail'  
  const trailName = trail ? trail.title : 'Unknown Trail';

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault(); 

    // Create reservation data object to send to the API
    const reservationData = {
      name,
      date,
      participants,
      trailId,
      trailName
    };

    try {
      // Call the API to create the reservation
      await createReservation(reservationData);
      // Display success message
      alert('Reservation created successfully!');
      // Reset form fields after successful reservation
      setName('');
      setDate('');
      setParticipants(1);
    } catch (error) {
      // Handle any errors (e.g., API failures)
      alert('Error creating reservation');
      // Log error for debugging
      console.error(error);  
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Display the trail name dynamically */}
      <h4>Trail: {trailName}</h4>

      {/* Form field for user's name */}
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          value={name}
          // Update the name state on input change
          onChange={(e) => setName(e.target.value)}
          // Ensure this field is filled out
          required  
          placeholder="Enter your name"
        />
      </Form.Group>

      {/* Form field for the reservation date */}
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          // Update the date state on input change
          onChange={(e) => setDate(e.target.value)}  
          // Ensure this field is filled out
          required  
        />
      </Form.Group>

      {/* Form field for the number of participants */}
      <Form.Group className="mb-3">
        <Form.Label>Participants</Form.Label>
        <Form.Control
          type="number"
          // Ensure at least 1 participant
          min={1}  
          value={participants}
          // Update the participants state on input change
          onChange={(e) => setParticipants(Number(e.target.value))}  
        />
      </Form.Group>

      {/* Submit button to submit the reservation form */}
      <Button variant="primary" type="submit">
        Book Trail
      </Button>
    </Form>
  );
}