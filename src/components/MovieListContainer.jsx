import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
  const movies = useSelector((state) => state.movie)

  return (
    <div className="p-8 bg-black">
      <div className="pl-4 md:-mt-52 relative z-20">
        <Movielist title="Trending Now" movies={movies.nowPlayingMovies} />
        <Movielist title="Popular Rated" movies={movies.popularMovies} />
        <Movielist title="Upcoming Movies" movies={movies.upcomingMovies} />
        <Movielist title="Top Movies" movies={movies.topRatedMovies} />
      </div>
    </div>
  )
}

export default MovieListContainer
