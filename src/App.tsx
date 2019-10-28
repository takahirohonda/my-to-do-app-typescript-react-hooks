import * as React from 'react'
import AppProvider from './AppProvider'
import FrontPage from './components/FrontPage'

const App = () => {
  return (
    <AppProvider>
      <FrontPage />
    </AppProvider>
  )
}

export default App
