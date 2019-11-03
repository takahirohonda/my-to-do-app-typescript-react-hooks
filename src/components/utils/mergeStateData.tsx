
import {
  IListData,
  ICurrentData,
  IListDetails,
  IDetails,
  ICurrentCategoryFieldNameAndCount,
  ITasks
} from '../../types/models'

export const mergeAllCategoriesByListName = (appData: IListData[], mergingData: IListDetails, listName: string)
: IListData[] => {
  appData.map((list: any, index: number) => {
    if (list.listName === listName) {
      // create newListDetails with immutable methods
      const newListDetails = appData[index]
        .listDetails
        .filter((listDetail) => listDetail.categoryName.toLowerCase() !== 'all categories')
        .concat(mergingData)

      // replace listDetails
      appData[index].listDetails = newListDetails

    }
  })
  return appData
}
