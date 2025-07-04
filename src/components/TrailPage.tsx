import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

// Import images
import sunsetRidgeImg from '../assets/sunset-ridge.jpg';
import riverRunImg from '../assets/river-run.jpg';
import pineLoopImg from '../assets/pine-loop.jpg';
import summitChallengeImg from '../assets/summit-challenge.jpg';

// Trail data with images
const trails = [
  {
    id: '1',
    title: 'Sunset Ridge',
    description: 'Sunset Ridge is a moderately challenging trail that winds along a high ridge offering sweeping panoramic views of the surrounding valleys and forests. As the name suggests, it is especially popular in the late afternoon, when the setting sun casts golden light across the landscape. The 4.5-mile route features gentle inclines, exposed rocky outcrops, and several scenic overlooks perfect for a photo or picnic break. Hikers can expect a mix of shaded forest paths and open ridgeline sections, making it ideal for both nature lovers and sunset seekers.',
    image: sunsetRidgeImg
  },
  {
    id: '2',
    title: 'River Run',
    description: 'River Run is a peaceful, easygoing trail that traces the gentle curves of the riverbank, making it perfect for a relaxing walk or light hike. The path features mostly flat terrain with a few gentle slopes, suitable for all skill levels and ideal for families or casual hikers. Along the way, you will be treated to the soothing sounds of flowing water, occasional glimpses of local wildlife, and shaded stretches beneath tall trees. With plenty of spots to stop and take in the view, River Run offers a calm, refreshing escape into nature.',
    image: riverRunImg
  },
  {
    id: '3',
    title: 'Pine Loop',
    description: 'Pine Loop is a tranquil circular trail that winds through dense pine forests and open wildflower meadows, offering a refreshing blend of shade and sunlight. This 3-mile loop is great for a moderate walk or a short morning hike, with well-marked paths and gentle elevation changes. The scent of pine needles fills the air as you pass beneath tall evergreens, and occasional clearings reveal wide meadow views—especially vibrant in spring and early summer. Ideal for birdwatching, photography, or simply enjoying a peaceful woodland escape.',
    image: pineLoopImg
  },
  {
    id: '4',
    title: 'Summit Challenge',
    description: 'Summit Challenge lives up to its name with a demanding ascent that rewards hikers with breathtaking panoramic views from the top. This 5.2-mile out-and-back trail features steep inclines, rocky switchbacks, and narrow ridge sections that test your endurance and focus. Along the way, you’ll pass through rugged terrain, sparse alpine woods, and exposed cliffsides with dramatic vistas. It’s a favorite for experienced hikers seeking a solid workout and a truly rewarding summit experience—especially at sunrise or on clear days when the horizon stretches for miles.',
    image: summitChallengeImg
  }
];

export default function TrailPage() {
  const { id } = useParams();  // Get the trail ID from the URL
  const navigate = useNavigate();  // To navigate to other pages

  // Find the trail that matches the ID from the URL
  const trail = trails.find(t => t.id === id);

  // If no trail is found, show a "not found" message
  if (!trail) return <p>Trail not found</p>;

  return (
    // Main container for the trail details
    // Using Bootstrap classes for layout and styling
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: '100%', maxWidth: '700px' }}>
        <Card.Img
          // Image for the trail card
          // Using variant="top" to place the image at the top of the card
          variant="top"
          src={trail.image} 
          alt={`Photo of ${trail.title} trail`}  
          loading="lazy" 
          style={{ height: '350px', objectFit: 'cover', width: '100%' }}
        />
        <Card.Body>
          {/* Card body containing trail details */}
          {/* Title and description of the trail */}
          <Card.Title>{trail.title}</Card.Title>  
          <Card.Text>{trail.description}</Card.Text>  

          {/* Buttons for navigation */}
          <div className="d-flex">
            <Button variant="secondary" className="me-2" onClick={() => navigate(-1)}>
              Back to Trails  {/* Navigate back to the previous page */}
            </Button>
            <Button variant="primary" onClick={() => navigate(`/reserve/${trail.id}`)}>
              Reserve Trail  {/* Navigate to the reservation page for this trail */}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}