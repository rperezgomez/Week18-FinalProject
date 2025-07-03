import { useParams } from 'react-router-dom';
import ReservationForm from './ReservationForm';

export default function ReservationPage() {
  const { trailId } = useParams();

  return (
    <>
      <h2>Book Your Hike</h2>
      <ReservationForm trailId={trailId!} />
    </>
  );
}