import { initialList } from '../store/initialList'
import { initialCategories } from '../store/initialCategories'
import { initialStatus } from '../store/initialStatus'
import { initialTasks } from '../store/initialTasks'
import {
  initialStateCurrent,
  initialStateUi
} from '../store/initialState'
import {
  checkIndexDbBrowserSupport,
  initialiseDb,
  getDataFromIndexedDb,
  upsertRecordToIndexedDb
} from './IndexedDB'

export const prepareDataForContextApi = async () => {

  const initialDataArray = [initialList, initialCategories, initialStatus, initialTasks, initialStateCurrent, initialStateUi]
  const keyArray = ['list', 'category', 'status', 'task', 'current', 'ui']

  if (checkIndexDbBrowserSupport) {
    try {
      const dbInitialized = await initialiseDb(initialDataArray, keyArray)
      if (dbInitialized) {
        return Promise.all([
          getDataFromIndexedDb('list'),
          getDataFromIndexedDb('category'),
          getDataFromIndexedDb('status'),
          getDataFromIndexedDb('task'),
          getDataFromIndexedDb('current'),
          getDataFromIndexedDb('ui')
        ]).then((values: any) => {

          return values
        })
      }
    } catch (e) {
      console.log('error in resolving getDataFromIndexDb promise')
    }
  }
}

export const getDataForContextApi = async () => {
  try {
    const data = await prepareDataForContextApi()
    console.log('final data check, ', data)
    return data
  } catch (e) {
     console.log(e)
  }
}
