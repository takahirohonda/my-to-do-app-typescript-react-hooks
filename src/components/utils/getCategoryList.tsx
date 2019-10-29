import {
  IListData,
  ICurrentData,
  IListDetails
} from '../../types/models'

export const getCategoryList = (currentData: ICurrentData, data: Array<IListData>): Array<string> => {
  console.log('current data', currentData.currentListName)
  const categoryFromCurrentList =
    data
      .filter((list: IListData) => list.listName === currentData.currentListName)

  console.log('category from current list', categoryFromCurrentList)
  const categoryArray: Array<string> = []
  categoryFromCurrentList[0].listDetails.map((listDetail: IListDetails) => {
    categoryArray.push(listDetail.categoryName)
  })
  return categoryArray
}
