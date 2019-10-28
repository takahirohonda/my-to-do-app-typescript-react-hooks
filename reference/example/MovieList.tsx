import * as React from 'react'
import { useContext } from 'react'
import MovieContext, { IMovieContext } from './MovieContext'

const MovieList = () => {
  const [movies, setMovies] = useContext<any>(MovieContext)
  return (

    <div>
    {movies.movies.map((movie: any, index: number) => {
      return (
        <ul key={index}>
        <li>{movie.name}</li>
        <li>{movie.price}</li>
        <li>{movie.id}</li>
        </ul>
      )})}
    </div>
  )
}

export default MovieList
