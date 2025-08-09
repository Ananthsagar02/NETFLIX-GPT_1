import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies in MovieList:", movies);
  return (
    <div className="px-6">
      <h1 className="text-4xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
