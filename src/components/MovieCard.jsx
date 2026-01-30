import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

const MovieCard = ({ movie }) => {
  // Construct the full URL for the movie poster
  const posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`} className="text-decoration-none">
      <Card className="h-100 movie-card">
        {/* Use the constructed posterUrl here */}
        <Card.Img variant="top" src={posterUrl} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <small className="text-muted">{movie.release_date}</small>
          </Card.Text>
          <RatingStars rating={movie.vote_average} />
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
