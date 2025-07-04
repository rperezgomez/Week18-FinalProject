import ReservationList from './ReservationList';

export default function ReservationListPage() {
  return (
    <>
      <h2>My Reservations</h2>
      {/* ReservationList component that displays all reservations */}
      {/* This component will fetch and display the list of reservations */}
      <ReservationList />
    </>
  );
}