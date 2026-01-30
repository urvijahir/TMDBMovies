import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import MovieGrid from "../components/MovieGrid";
import { fetchMovieDetails } from "../services/tmdbService"; // Import the detail fetcher

const Favorites = ({ favorites }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteDetails = async () => {
      if (favorites.length === 0) {
        setFavoriteMovies([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const moviePromises = favorites.map((id) => fetchMovieDetails(id));
      const movies = await Promise.all(moviePromises);
      const validMovies = movies.filter((movie) => movie !== null);

      setFavoriteMovies(validMovies);
      setIsLoading(false);
    };

    fetchFavoriteDetails();
  }, [favorites]);

  return (
    <Container fluid className="favorites-page-container p-4">
      <h1 className="mb-4">My Favorite Movies</h1>

      {isLoading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
          <p className="mt-2">Loading your favorites...</p>
        </div>
      ) : favoriteMovies.length > 0 ? (
        <MovieGrid movies={favoriteMovies} />
      ) : (
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="no-favorites-message">
              <h2>You have no favorite movies yet.</h2>
              <p>Start adding some from the movie detail pages!</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Favorites;
