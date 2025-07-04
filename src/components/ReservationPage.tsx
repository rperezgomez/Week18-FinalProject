import { useParams } from 'react-router-dom';
import ReservationForm from './ReservationForm';

export default function ReservationPage() {
  //useParams is used to extract the trailId from the URL parameters
  // This allows us to know which trail the user is reserving for
  const { trailId } = useParams();

  return (
    <>
      <h2>Book Your Hike</h2>
      {/* ReservationForm component that handles the reservation process */}
      {/* It takes the trailId as a prop to know which trail is being reserved */}
      <ReservationForm trailId={trailId!} />
    </>
  );
}