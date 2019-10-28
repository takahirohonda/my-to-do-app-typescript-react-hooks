import * as React from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import MovieProvider from './MovieProvider'
import AddMovie from './AddMovie'

const ExampleApp = () => {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  )
}

export default ExampleApp
