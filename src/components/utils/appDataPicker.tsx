import {
  IListData,
  ICurrentData,
  IListDetails,
  IDetails,
  ICurrentCategoryFieldNameAndCount,
  ITasks
} from '../../types/models'

// Return an the current list details for the selected list
export const getCurrentListDetails = (appData: Array<IListData>, currentListName: string): Array<IListDetails> => {

  return appData
  .filter((list: IListData) => list.listName.toLowerCase() === currentListName.toLowerCase())[0]
  .listDetails
}

// get current category details for the selected list & selected category
export const getCurrentCategoryDetails = (currentListDetails: Array<IListDetails>, currentCategoryName: string): Array<IDetails> => {

  return currentListDetails
  .filter((listDetails: IListDetails) => listDetails.categoryName.toLowerCase() === currentCategoryName.toLowerCase())[0]
  .details
}

export const getCurrentCategoryFieldNameAndCount = (currentCategoryDetails: Array<IDetails>): Array<ICurrentCategoryFieldNameAndCount> => {
  const output: Array<ICurrentCategoryFieldNameAndCount> = []
  currentCategoryDetails.forEach((detail: IDetails) => {
    output.push({
      fieldName: detail.fieldName,
      count: (detail.tasks || []).length
    })
  })
  return output
}

// This is to display task list in details main section
export const getCurrentFieldTaskList = (currentDetails: Array<IDetails>, currentFieldName: string): Array<ITasks> => {
  return currentDetails
  .filter((detail: IDetails) => detail.fieldName.toLowerCase() === currentFieldName.toLowerCase())[0]
  .tasks
}

// Sort task list by createdData
export const sortTaskByCreatedDate = (taskList: Array<ITasks>, currentSortOrder: string) => {
  if (currentSortOrder.toLowerCase() === 'desc') {
    return taskList.sort((a: ITasks, b: ITasks): number => {
      return a.createdDate < b.createdDate ? 1 : -1
    })
  }
  else if (currentSortOrder.toLowerCase() === 'asc') {
    return taskList.sort((a: ITasks, b: ITasks): number => {
      return a.createdDate > b.createdDate ? 1 : -1
    })
  }
}

