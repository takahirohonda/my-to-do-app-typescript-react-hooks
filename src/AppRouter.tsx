import * as React from 'react'
import { useContext, useEffect } from 'react'
import AppProvider from './AppProvider'
import FrontPage from './components/FrontPage'
import DetailsPage from './components/DetailsPage'
import { HashRouter as Router, Route } from 'react-router-dom'

const AppRouter = () => {

  return (
    <>
      <Router>
        <Route exact path='/' component={FrontPage} />
        <Route exact path='/details' component={DetailsPage} />
      </Router>
    </>
  )
}

export default AppRouter
