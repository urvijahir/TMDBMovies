// =================== CONFIGURATION ===================
// The base URL is now OUR backend server, not TMDB's
const BASE_URL = 'http://localhost:3001/api';

// We no longer need the API key here. The server handles it securely.

// =================== API FUNCTIONS ===================

/**
 * Fetches popular movies from our server
 * The endpoint path matches the one we defined in server/index.js
 */
export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movies/popular`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    const data = await response.json();
    return data.results; // The movie list is in the 'results' property
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Fetches top-rated movies from our server
 */
export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movies/top-rated`);
    if (!response.ok) {
      throw new Error('Failed to fetch top-rated movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Fetches details for a single movie from our server
 */
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Searches for movies using our server
 */
export const searchMovies = async (query) => {
  if (!query) return [];
  try {
    // Note the query parameter in the URL
    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};