import * as React from 'react'
import {
  initialStateMtd,
  initialStateCurrent,
  initialStateUi
} from './store/initialState'
import { useState } from 'react'
import {
  DataContext,
  CurrentContext,
  UiContext
} from './AppContext'

interface IMovieProviderProps {
  children?: JSX.Element[] | JSX.Element
}

const AppProvider = (props: IMovieProviderProps) => {
  const [appData, setAppData] = useState<any>(initialStateMtd)
  const [currentData, setCurrentData] = useState<any>(initialStateCurrent)
  const [UiData, setUiData] = useState<any>(initialStateUi)

  return (
    <DataContext.Provider value={[appData, setAppData]}>
      <CurrentContext.Provider value={[currentData, setCurrentData]}>
        <UiContext.Provider value={[UiData, setUiData]}>
          {props.children}
        </UiContext.Provider>
      </CurrentContext.Provider>
    </DataContext.Provider>
  )
}

export default AppProvider
