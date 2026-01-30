import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import MovieGrid from "../components/MovieGrid";
import { searchMovies } from "../services/tmdbService"; // This calls our backend server

const SearchPage = () => {
  // State to hold the user's search query from the input field
  const [searchQuery, setSearchQuery] = useState("");

  // State to hold the array of movies returned from our API
  const [searchResults, setSearchResults] = useState([]);

  // State to show a loading spinner while we wait for the API
  const [isLoading, setIsLoading] = useState(false);

  // State to track if the user has performed at least one search
  const [isSearched, setIsSearched] = useState(false);

  // This function is called when the "Search" button is clicked
  const handleSearch = async () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery === "") {
      // If the search box is empty, don't do anything
      return;
    }

    setIsLoading(true);
    setIsSearched(true);

    // Call our service function. It will now fetch from our Node.js server.
    const results = await searchMovies(trimmedQuery);

    setSearchResults(results);
    setIsLoading(false);
  };

  // This function allows the user to press "Enter" to search
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container fluid className="search-page-container p-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="text-center mb-4">Search Movies</h1>
          <InputGroup className="mb-4">
            <FormControl
              placeholder="Enter movie title..."
              aria-label="Movie title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="primary"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : (
                "Search"
              )}
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* --- Conditional Rendering for Results --- */}
      <Row>
        <Col>
          {/* Show a spinner while the API call is in progress */}
          {isLoading && (
            <div className="text-center mt-4">
              <Spinner animation="border" />
              <p className="mt-2">Searching...</p>
            </div>
          )}

          {/* Show results if loading is finished, a search was made, and we have results */}
          {!isLoading && isSearched && searchResults.length > 0 && (
            <MovieGrid movies={searchResults} />
          )}

          {/* Show a "no results" message if loading is finished, a search was made, but there are no results */}
          {!isLoading && isSearched && searchResults.length === 0 && (
            <div className="no-results-message text-center mt-5">
              <h3>No movies found for "{searchQuery}"</h3>
              <p>Try searching for another title.</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
