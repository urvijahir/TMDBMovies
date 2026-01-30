import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";
import "./index.css";
import AllMoviesPage from "./pages/AllMoviesPage";

function App() {
  // State to store an array of favorite movie IDs
  const [favorites, setFavorites] = useState([]);

  // Function to add a movie to favorites
  const addFavorite = (movieId) => {
    setFavorites((prevFavorites) => [...prevFavorites, movieId]);
  };

  // Function to remove a movie from favorites
  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((id) => id !== movieId)
    );
  };
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} />}
            />
            {/* ADD THE NEW DYNAMIC ROUTE */}
            <Route path="/movies/:category" element={<AllMoviesPage />} />

            {/* This is a DYNAMIC route.
                If the URL is "/movie/1", "/movie/2", etc., show the <MovieDetail /> component.
                The ":movieId" part is a URL parameter that we can use in the MovieDetail page. */}
            <Route
              path="/movie/:movieId"
              element={
                <MovieDetail
                  favorites={favorites}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                />
              }
            />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
{
  /* This is a DYNAMIC route.
                If the URL is "/movie/1", "/movie/2", etc., show the <MovieDetail /> component.
                The ":movieId" part is a URL parameter that we can use in the MovieDetail page. */
}
