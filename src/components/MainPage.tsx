import TrailList from './TrailList';

// MainPage component - displays the main page with a title and the list of trails
export default function MainPage() {
  return (
    <>
      {/* Main title for the page */}
      <h2 className="text-center">Choose a Trail</h2>
      
      {/* TrailList component that renders a list of trails */}
      <TrailList />
    </>
  );
}