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
import { upsertRecordToIndexedDb } from './helpers/IndexedDB'
import { getDataForContextApi } from './helpers/InitialiseDb'

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

  useEffect(() => {
    // get initial data
    getDataForContextApi()
    .then((data) => {
      setListData(data[0])
      setCategoryData(data[1])
      setStatusData(data[2])
      setTaskData(data[3])
      setCurrentData(data[4])
      setUiData(data[5])
    })
  }, [])

  useEffect(() => {
    if (listData !== initialList) {
      upsertRecordToIndexedDb(listData, 'list')
    }
  }, [listData])

  useEffect(() => {
    if (categoryData !== initialCategories) {
      upsertRecordToIndexedDb(categoryData, 'category')
    }
  }, [categoryData])

  useEffect(() => {
    if (statusData !== initialStatus) {
    upsertRecordToIndexedDb(statusData, 'status')
    }
  }, [statusData])

  useEffect(() => {
    if (taskData !== initialTasks) {
      upsertRecordToIndexedDb(taskData, 'task')
    }
  }, [taskData])

  useEffect(() => {
    if (currentData !== initialStateCurrent) {
      upsertRecordToIndexedDb(currentData, 'current')
    }
  }, [currentData])

  useEffect(() => {
    if (uiData !== initialStateUi) {
      upsertRecordToIndexedDb(uiData, 'ui')
    }
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
