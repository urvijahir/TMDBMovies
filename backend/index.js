// =================== IMPORTS ===================
// Import the express library to create our server
const express = require('express');
// Import cors to allow requests from our React frontend
const cors = require('cors');
// Import dotenv to load environment variables from our .env file
const dotenv = require('dotenv');
// Import axios to make requests to the TMDB API
const axios = require('axios');

// =================== CONFIGURATION ===================
// Load environment variables from .env file into process.env
dotenv.config();

// Create an instance of an Express application
const app = express();
// Define the port our server will run on
const PORT = process.env.PORT || 3001;

// =================== MIDDLEWARE ===================
// Use CORS middleware to allow cross-origin requests
app.use(cors());

// =================== API ENDPOINTS (ROUTES) ===================
// Define the base URL for the TMDB API
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
// Get the API key from our environment variables
const API_KEY = process.env.TMDB_API_KEY;

/**
 * ENDPOINT: GET /api/movies/popular
 * DESCRIPTION: Fetches a list of popular movies from TMDB and sends them to the client.
 */
app.get('/api/movies/popular', async (req, res) => {
  try {
    // Use axios to make a GET request to the TMDB API
    const response = await axios.get(`${TMDB_API_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY, // Securely add the API key as a query parameter
      },
    });
    // Send the data from TMDB back to our React app
    res.json(response.data);
  } catch (error) {
    // If there's an error, send a 500 server error status
    res.status(500).json({ message: 'Error fetching popular movies' });
  }
});

/**
 * ENDPOINT: GET /api/movies/top-rated
 * DESCRIPTION: Fetches a list of top-rated movies.
 */
app.get('/api/movies/top-rated', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_API_BASE_URL}/movie/top_rated`, {
      params: { api_key: API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching top-rated movies' });
  }
});

/**
 * ENDPOINT: GET /api/movie/:id
 * DESCRIPTION: Fetches the details for a single movie using its ID.
 * The :id part is a URL parameter that Express makes available in req.params
 */
app.get('/api/movie/:id', async (req, res) => {
    try {
        // Get the movie ID from the URL parameters
        const { id } = req.params;
        const response = await axios.get(`${TMDB_API_BASE_URL}/movie/${id}`, {
            params: { api_key: API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie details' });
    }
});

/**
 * ENDPOINT: GET /api/search/movie
 * DESCRIPTION: Searches for movies based on a query string.
 * The query is taken from the URL's query parameters (e.g., ?query=batman)
 */
app.get('/api/search/movie', async (req, res) => {
  try {
    // Get the search query from the request query parameters
    const { query } = req.query;
    if (!query) {
      return res.json({ results: [] }); // Return empty if no query
    }
    const response = await axios.get(`${TMDB_API_BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query, // Pass the search query to TMDB
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error searching movies' });
  }
});

// =================== START SERVER ===================
// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});