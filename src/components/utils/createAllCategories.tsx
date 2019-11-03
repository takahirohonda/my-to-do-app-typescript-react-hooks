// function to create AllCategories for the current list
import {
  IListData,
  ICurrentData,
  IListDetails,
  IDetails,
  ICurrentCategoryFieldNameAndCount,
  ITasks
} from '../../types/models'

import {
  getCurrentListDetails
} from './appDataPicker'

export const createAllCategories = (listData: IListData[], currentListName: string): IListDetails => {
  // initialise empty shell
  const allCategories: IListDetails = {
    categoryName: 'All categories',
    details: [
      {
        fieldName: 'To do',
        tasks: []
      },
      {
        fieldName: 'Doing',
        tasks: []
      },
      {
        fieldName: 'Done',
        tasks: []
      },
      {
        fieldName: 'Backlog',
        tasks: []
      }

    ]
  }

  const currentListDetails: IListDetails[] = getCurrentListDetails(listData, currentListName)
  currentListDetails.forEach((listDetails: IListDetails, index: number) => {
    if (listDetails.categoryName.toLowerCase() !== 'all categories') {
      listDetails.details.forEach((detail: IDetails, index: number) => {
        allCategories.details[index].tasks.push(...detail.tasks)
      })
    }
  })
  return allCategories
}
