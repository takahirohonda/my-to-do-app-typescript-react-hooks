import * as React from 'react'
import AppRouter from './AppRouter'
import AppProvider from './AppProvider'


const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
