import * as React from 'react'
import AppProvider from './AppProvider'
import FrontPage from './components/FrontPage'
import DetailsPage from './components/DetailsPage'
import { HashRouter as Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <AppProvider>
      <Router>
        <Route exact path='/' component={FrontPage} />
        <Route exact path='/details' component={DetailsPage} />
      </Router>
    </AppProvider>
  )
}

export default App
