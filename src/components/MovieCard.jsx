import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className="w-44 flex-shrink-0 pr-4">
      <img src={`${IMG_CDN_URL}${movie.poster_path}`} alt={movie.title} />
      {/* <h3>{movie.title}</h3> */}
    </div>
  )
}

export default MovieCard
