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
import { useState, useEffect } from 'react'
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
  const [listData, setListData] = useState<IList[]>(JSON.parse(localStorage.getItem('mtdListData')) || initialList)
  const [categoryData, setCategoryData] = useState<ICategory[]>(JSON.parse(localStorage.getItem('mtdCategoryData')) || initialCategories)
  const [statusData, setStatusData] = useState<IStatus[]>(JSON.parse(localStorage.getItem('mtdStatusData')) || initialStatus)
  const [taskData, setTaskData] = useState<ITask[]>(JSON.parse(localStorage.getItem('mtdTaskData')) || initialTasks)
  const [currentData, setCurrentData] = useState<ICurrentData>(JSON.parse(localStorage.getItem('mtdCurrentData')) || initialStateCurrent)
  const [uiData, setUiData] = useState<IUiData>(JSON.parse(localStorage.getItem('mtdUiData')) || initialStateUi)

  useEffect(() => {
    localStorage.mtdListData = JSON.stringify(listData)
  }, [listData])
  useEffect(() => {
    localStorage.mtdCategoryData = JSON.stringify(categoryData)
  }, [categoryData])
  useEffect(() => {
    localStorage.mtdStatusData = JSON.stringify(statusData)
  }, [statusData])
  useEffect(() => {
    localStorage.mtdTaskData = JSON.stringify(taskData)
  }, [taskData])
  useEffect(() => {
    localStorage.mtdCurrentData = JSON.stringify(currentData)
  }, [currentData])
  useEffect(() => {
    localStorage.mtdUiData = JSON.stringify(uiData)
  }, [uiData])

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
