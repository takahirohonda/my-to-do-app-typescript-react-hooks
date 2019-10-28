import * as React from 'react'
import { initialState } from './store/initialState'
import {useState, createContext} from 'react'
import MovieContext, { IMovieContext } from './MovieContext'

interface IMovieProviderProps {
  children?: JSX.Element[] | JSX.Element
}

const MovieProvider = (props: IMovieProviderProps) => {
  const [movies, setMovies] = useState<IMovieContext>(initialState)

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
    )
}

export default MovieProvider
