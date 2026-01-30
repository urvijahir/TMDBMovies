import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="h-100 movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
