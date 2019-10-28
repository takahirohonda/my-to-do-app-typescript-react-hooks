import * as React from 'react'
import MovieContext, { IMovieContext } from './MovieContext'

const Nav = () => {
  const [movies, setMovies] = React.useContext<any>(MovieContext)

  return (
    <nav>
      <h2>Movie List</h2>
      <p>List of movies: {movies.movies.length}</p>
    </nav>
  )

}

export default Nav
