import MovieGrid from "./MovieGrid";

const MovieSection = ({ title, movies, onSeeAll }) => {
  return (
    <section className="movie-section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="see-all-btn" onClick={onSeeAll}>
          See All
        </button>
      </div>
      <MovieGrid movies={movies} />
    </section>
  );
};

export default MovieSection;
