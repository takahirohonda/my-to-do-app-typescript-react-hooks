import { expect } from 'chai'
import { stateCurrentToDoForEdit } from './mock-data/stateMock'
import { listDataMock, listDataMockWithAllCategries } from './mock-data/listDataMock'
import {
  ICurrentData,
  IListData,
  IListDetails,
  IDetails,
  ITasks
} from '../../../types/models'


describe.skip('checking spread operator', () => {
  describe('editTaskList', () => {
    it('should edit taks list', () => {

      const currentData = stateCurrentToDoForEdit
      const listData = listDataMockWithAllCategries
      const editedTask = 'edited task'

      // console.log(listData)
      // console.log(currentData)
      const newData = listData.map((list: IListData) => {
        if (list.listName.toLowerCase()  === currentData.currentListName.toLowerCase() ) {
          list.listDetails.map((listDetail: IListDetails) => {
            // console.log('checking categoryName ', listDetail.categoryName)
            if ((currentData.currentCategoryName.toLowerCase() !== 'all categories'
            && (listDetail.categoryName.toLowerCase() === currentData.currentCategoryName.toLowerCase()
            || listDetail.categoryName.toLowerCase() === 'all categories'))
            ||
            (currentData.currentCategoryName.toLowerCase() === 'all categories'
            && (listDetail.categoryName.toLowerCase() === 'to do'
            || listDetail.categoryName.toLowerCase() === 'all categories'))
            ) {
              listDetail.details.map((detail: IDetails) => {
                // console.log('checking fieldname ', detail.fieldName)
                if (detail.fieldName.toLowerCase()  === currentData.currentFieldName.toLowerCase() ) {
                  detail.tasks.map((task: ITasks) => {
                    // console.log('checking task ', task)
                    if (task.task.toLowerCase().trim() === currentData.currentTask.toLowerCase().trim()) {
                      // console.log('checking task.task ', task.task)
                      task.task = editedTask
                    }
                  })
                }
              })
            }
          })
        }
        return list
      }) // end of map

      console.log(JSON.stringify(newData, null, 4))
    })
  })


  describe('mergeByListName', () => {
    it('checking merge by listname', () => {
      const data = [
        {
          listName: 'Personal',
          listDetails: [
            {
              categoryName: 'To Do',
              details: [] as any
            },
            {
              categoryName: 'All categories',
              details: [] as any
            }
          ]
        },
        {
          listName: 'Work',
          listDetails: [
            {
              categoryName: 'To Do',
              details: [] as any
            }
          ]
        }
      ]
      const listName = 'Personal'
      const dataAllCategoriesForPersonal = {
        categoryName: 'All categories',
        details: [] as any
      }

      const mergedByListName = (data: any, mergingData: any, listName: string) => {
        data.map((list: any, index: number) => {
          if (list.listName === listName) {
            data[index].listDetails.filter((listDetail: any) => listDetail.categoryName.toLowerCase() !== 'all categories')
            data[index].listDetails.push(mergingData)
          }

        })
        return data
      }

      const merged = mergedByListName(data, dataAllCategoriesForPersonal, listName)
      // console.log(JSON.stringify(merged, undefined, 4))
    })
  })

})


