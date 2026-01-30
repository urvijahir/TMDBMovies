import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../services/tmdbService";

const AllMoviesPage = () => {
  // Get the category from the URL, e.g., "top-rated" or "popular"
  const { category } = useParams();

  // State for the movies, loading status, and page title
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");

  // useEffect runs when the component mounts AND when the category changes
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      let fetchedMovies = [];
      let pageTitle = "";

      // Determine which movies to fetch based on the URL parameter
      switch (category) {
        case "top-rated":
          // This now calls our backend server
          fetchedMovies = await fetchTopRatedMovies();
          pageTitle = "Top Rated Movies";
          break;
        case "popular":
          // This now calls our backend server
          fetchedMovies = await fetchPopularMovies();
          pageTitle = "Popular Movies";
          break;
        default:
          // If the category is invalid, we can stop loading
          setIsLoading(false);
          return;
      }

      setMovies(fetchedMovies);
      setTitle(pageTitle);
      setIsLoading(false);
    };

    getMovies();
  }, [category]); // The dependency array ensures this runs again if the category changes

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p className="mt-2">Loading movies...</p>
      </Container>
    );
  }

  if (!title) {
    // Handle case where the category is not found
    return (
      <Container className="text-center mt-5">
        <h1>Category Not Found</h1>
        <p>The movie category you're looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <h1 className="mb-4">{title}</h1>

      {/* We use a standard Bootstrap grid for the "See All" page */}
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id} xs={6} sm={6} md={4} lg={3}>
            {/* We render the MovieCard directly inside the grid column */}
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllMoviesPage;
