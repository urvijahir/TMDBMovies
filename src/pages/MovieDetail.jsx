import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { fetchMovieDetails } from "../services/tmdbService"; // Import our service
import RatingStars from "../components/RatingStars";

const MovieDetail = ({ favorites, addFavorite, removeFavorite }) => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      // This function now calls our backend server
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
      setIsLoading(false);
    };

    getMovieDetails();
  }, [movieId]); // Re-run this effect if the movieId changes

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p className="mt-2">Loading movie details...</p>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container className="text-center mt-5">
        <h1>Movie Not Found</h1>
        <Button onClick={() => navigate("/")}>Go Back Home</Button>
      </Container>
    );
  }

  const isFavorite = favorites.includes(movie.id);

  // IMPORTANT: TMDB poster paths are relative.
  // We must prepend the base image URL to get the full image.
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Container fluid className="movie-detail-container p-4">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
        &larr; Back
      </Button>
      <Row>
        <Col md={4} className="text-center">
          <img
            src={posterUrl} // Use the constructed full URL
            alt={movie.title}
            className="movie-poster img-fluid"
          />
        </Col>
        <Col md={8}>
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-meta">{movie.release_date}</p>
          <div className="mb-4">
            <RatingStars rating={movie.vote_average} />
            <span className="rating-text ms-2">
              ({movie.vote_average} / 10)
            </span>
          </div>
          <h3>Overview</h3>
          <p className="movie-overview">{movie.overview}</p>
          <div className="mt-4">
            {isFavorite ? (
              <Button variant="danger" onClick={() => removeFavorite(movie.id)}>
                ❤️ Remove from Favorites
              </Button>
            ) : (
              <Button variant="primary" onClick={() => addFavorite(movie.id)}>
                🤍 Add to Favorites
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
