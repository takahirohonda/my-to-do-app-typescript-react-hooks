import * as React from 'react'
import { useState, useContext } from 'react'
import MovieContext, { IMovieContext } from './MovieContext'

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e: React.FormEvent<HTMLInputElement>) => {
    setName((e.target as HTMLInputElement).value)
  }

  const updatePrice = (e: React.FormEvent<HTMLInputElement>) => {
    setPrice((e.target as HTMLInputElement).value)
  }

  const addMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMovies((prevMovies: IMovieContext) => {
      return { ...prevMovies,
        movies: [...prevMovies.movies, {name: name, price: price}]
      }
    })
  }

  return (
    <form onSubmit={addMovie}>
      <input type='text' name='name' value={name} onChange={updateName} />
      <input type='text' name='price' value={price} onChange={updatePrice} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddMovie
