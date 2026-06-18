import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  return (
    <div>
      <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
