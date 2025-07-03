import aboutBanner from '../assets/about-banner.jpg';

export default function AboutPage() {
  return (
    <>
      <h2 className="text-center mb-4">About Us</h2>
      <img
        src={aboutBanner}
        alt="Hikers enjoying a trail"
        className="img-fluid rounded mb-4"
      />
      <p>
        We’re a team of passionate hikers and outdoor enthusiasts who created this app to make exploring nature more accessible, fun, and responsible. Whether you're a seasoned hiker or just looking for a peaceful walk in the woods, our platform helps you discover trails, reserve your spot, and plan your next adventure with ease.
      </p>
      <p>
        Our mission is to promote safe, sustainable outdoor experiences while connecting more people to the beauty of the natural world. Lace up your boots—your next trail is just a click away!
      </p>
    </>
  );
}