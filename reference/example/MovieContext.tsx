import * as React from 'react'
import { createContext } from 'react'

export interface IMovieContext {
  movies?: IMovie[]
}
export interface IMovie {
  name: string
  price: string
  id: number
}

const MovieContext = createContext<any>({})

export default MovieContext
