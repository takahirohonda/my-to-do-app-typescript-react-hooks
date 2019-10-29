import * as React from 'react'
import {
  initialStateMtd,
  initialStateCurrent,
  initialStateUi
} from './store/initialState'
import {
  IListData,
  ICurrentData,
  IUiData
} from './types/models'
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
  const [appData, setAppData] = useState<Array<IListData>>(initialStateMtd)
  const [currentData, setCurrentData] = useState<ICurrentData>(initialStateCurrent)
  const [uiData, setUiData] = useState<IUiData>(initialStateUi)

  return (
    <DataContext.Provider value={[appData, setAppData]}>
      <CurrentContext.Provider value={[currentData, setCurrentData]}>
        <UiContext.Provider value={[uiData, setUiData]}>
          {props.children}
        </UiContext.Provider>
      </CurrentContext.Provider>
    </DataContext.Provider>
  )
}

export default AppProvider
