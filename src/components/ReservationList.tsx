import { useEffect, useState } from 'react';
import { fetchReservations, deleteReservation } from '../api/reservationApi';
import Reservation from './Reservation';

export default function ReservationList() {
  const [reservations, setReservations] = useState<any[]>([]);

  const load = async () => {
    const { data } = await fetchReservations();
    setReservations(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteReservation(id);
    load();
  };

  return (
    <>
      {reservations.map((res) => (
        <Reservation key={res.id} reservation={res} onDelete={() => handleDelete(res.id)} />
      ))}
    </>
  );
}