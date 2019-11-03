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
    .filter((data) => data.listName.toLowerCase() === currentData.currentListName.toLowerCase()
      && data.categoryName.toLowerCase() === currentData.currentCategoryName.toLowerCase())
  }
}

export const getTaskCountForStatus = (taskData: ITask[], currentData: ICurrentData, statusId: number): number => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return taskData
    .filter((data) => data.listName === currentData.currentListName
      && data.statusId === statusId)
    .length
  } else {
    return taskData
    .filter((data) => data.listName.toLowerCase() === currentData.currentListName.toLowerCase()
      && data.categoryName.toLowerCase()  === currentData.currentCategoryName.toLowerCase()
      && data.statusId === statusId )
    .length
  }
}
