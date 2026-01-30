import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieSection from "../components/MovieSection";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../services/tmdbService";

const Home = () => {
  const navigate = useNavigate();

  // State for popular movies
  const [popularMovies, setPopularMovies] = useState([]);
  // State for top-rated movies
  const [topRated, setTopRated] = useState([]);
  // State to track if data is loading
  const [isLoading, setIsLoading] = useState(true);

  // useEffect runs when the component mounts
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      // These functions now call our backend server
      const popular = await fetchPopularMovies();
      const topRated = await fetchTopRatedMovies();
      setPopularMovies(popular);
      setTopRated(topRated);
      setIsLoading(false);
    };

    getMovies();
  }, []); // The empty array [] means this effect runs only once

  // This function now navigates to the correct URL
  const handleSeeAllClick = (category) => {
    const slug = category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/movies/${slug}`);
  };

  // Show a loading message while fetching data
  if (isLoading) {
    return (
      <div className="page-container text-center">
        <h1>Loading Movies...</h1>
      </div>
    );
  }

  return (
    <div className="page-container">
      <MovieSection
        title="Top Rated Movies"
        movies={topRated} // Use state
        onSeeAll={() => handleSeeAllClick("Top Rated")}
      />
      <MovieSection
        title="Popular Movies"
        movies={popularMovies} // Use state
        onSeeAll={() => handleSeeAllClick("Popular")}
      />
    </div>
  );
};

export default Home;
