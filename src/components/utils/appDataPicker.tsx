import {
  IListData,
  ICurrentData,
  IListDetails,
  IDetails,
  ICurrentCategoryFieldNameAndCount
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

export const getCurrentCategoryFieldNameAndCount = (details: Array<IDetails>): Array<ICurrentCategoryFieldNameAndCount> => {

  const output: Array<ICurrentCategoryFieldNameAndCount> = []

  details.forEach((detail: IDetails) => {
    output.push({
      fieldName: detail.fieldName,
      count: (detail.tasks || []).length
    })
  })
  return output

}

