import {
  IStatus,
  ICurrentData,
  ITask
} from '../../types/models'


export const getCurrentStatusArray = (statusData: IStatus[], currentData: ICurrentData)
: IStatus[] => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return statusData
    .filter((data) => data.listName.toLowerCase() === 'default'
      && data.categoryName.toLowerCase() === 'default')
  } else {
    return statusData
    .filter((data) => data.listName === currentData.currentListName
      && data.categoryName === currentData.currentCategoryName)
  }
}

export const getTaskCountForStatus = (taskData: ITask[], currentData: ICurrentData, status: string): number => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return taskData
    .filter((data) => data.listName === currentData.currentListName
      && data.status === status)
    .length
  } else {
    return taskData
    .filter((data) => data.listName === currentData.currentListName
      && data.categoryName === currentData.currentCategoryName
      && data.status === status)
    .length
  }
}
