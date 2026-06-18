import React from 'react'
import Header from './Header'
import TrailerContainer from './TrailerContainer'
import MovieListContainer from './MovieListContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Home = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <TrailerContainer />
      <MovieListContainer />
    </div>
  )
}

export default Home
