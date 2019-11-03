import * as React from 'react'
import { initialList } from './store/initialList'
import { initialCategories } from './store/initialCategories'
import { initialStatus } from './store/initialStatus'
import { initialTasks } from './store/initialTasks'
import {
  initialStateCurrent,
  initialStateUi
} from './store/initialState'
import {
  IList,
  ICategory,
  IStatus,
  ITask,
  ICurrentData,
  IUiData
} from './types/models'
import { useState } from 'react'
import {
  ListContext,
  CategoryContext,
  StatusContext,
  TaskContext,
  CurrentContext,
  UiContext
} from './AppContext'

interface IMovieProviderProps {
  children?: JSX.Element[] | JSX.Element
}

const AppProvider = (props: IMovieProviderProps) => {
  const [listData, setListData] = useState<IList[]>(initialList)
  const [categoryData, setCategoryData] = useState<ICategory[]>(initialCategories)
  const [statusData, setStatusData] = useState<IStatus[]>(initialStatus)
  const [taskData, setTaskData] = useState<ITask[]>(initialTasks)
  const [currentData, setCurrentData] = useState<ICurrentData>(initialStateCurrent)
  const [uiData, setUiData] = useState<IUiData>(initialStateUi)

  return (
    <ListContext.Provider value={[listData, setListData]}>
      <CategoryContext.Provider value={[categoryData, setCategoryData]}>
        <StatusContext.Provider value={[statusData, setStatusData]}>
          <TaskContext.Provider value={[taskData, setTaskData]}>
            <CurrentContext.Provider value={[currentData, setCurrentData]}>
              <UiContext.Provider value={[uiData, setUiData]}>
                {props.children}
              </UiContext.Provider>
            </CurrentContext.Provider>
          </TaskContext.Provider>
        </StatusContext.Provider>
      </CategoryContext.Provider>
    </ListContext.Provider>
  )
}

export default AppProvider
