import { useEffect, useState } from 'react';
import { fetchReservations, deleteReservation } from '../api/reservationApi';
import Reservation from './Reservation';

export default function ReservationList() {
  // State to store the list of reservations
  const [reservations, setReservations] = useState<any[]>([]);

  // Function to fetch the reservations and update the state
  const load = async () => {
    // Fetch reservations from the API and update the state
    const { data } = await fetchReservations(); 
    setReservations(data); 
  };

  // useEffect hook to load reservations when the component is first rendered
  useEffect(() => {
    load();
  }, []);  // Empty dependency array ensures this only runs once when the component mounts

  // Function to handle deletion of a reservation
  const handleDelete = async (id: string) => {
     // Call API to delete reservation by ID and then reload the reservations
    await deleteReservation(id); 
    load();  
  };

  return (
    <>
      {/* Map through the reservations and render a Reservation component for each one */}
      {reservations.map((res) => (
        <Reservation 
          // Ensure each Reservation has a unique key for efficient rendering
          key={res.id} 
          // Pass the reservation data to the Reservation component and the delete handler
          reservation={res}  
          onDelete={() => handleDelete(res.id)}  
        />
      ))}
    </>
  );
}