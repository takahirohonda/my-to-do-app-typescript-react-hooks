import { expect } from 'chai'
import { listDataMockWithAllCategries } from './mock-data/listDataMock'
import {
  editTaskList,
  updateTaskListStatus,
  addTaskList,
  getCurrentTask,
  deleteAndUpdateCurrentTask
} from '../updateTaskList'

// Todo: this test has issue with mutability. not reliable need to be fixed

describe('updateTaskList.tsx', () => {
  describe.only('editTaskList()', () => {
    it('should edit tasks on both current category name & all categories', () => {
      // Arrange
      const currentData = {
        currentListName: 'Personal',
        currentCategoryName: 'To Do',
        currentFieldName: 'To do',
        currentTask: 'Service lawn mower',
        currentFieldIndex: 0,
        taskSortOrder: 'desc'
      }

      const appData = [ ...listDataMockWithAllCategries ]
      const editedTask = 'Hello World'

      // Act
      const newData = editTaskList(appData, currentData, editedTask)

      // Assert
      const toDoTaskIndexZero = newData
      .filter((list) => list.listName === currentData.currentListName)[0].listDetails
      .filter((listDetail) => listDetail.categoryName === currentData.currentCategoryName)[0].details
      .filter((detail) => detail.fieldName === currentData.currentFieldName)[0].tasks[0]

      const allCategoryTaskIndexZero = newData
      .filter((list) => list.listName === currentData.currentListName)[0].listDetails
      .filter((listDetail) => listDetail.categoryName === 'All categories')[0].details
      .filter((detail) => detail.fieldName === currentData.currentFieldName)[0].tasks[0]

      expect(toDoTaskIndexZero.task).to.equal(editedTask)
      expect(allCategoryTaskIndexZero.task).to.equal(editedTask)

    })

    it('should edit tasks on both all categories & to do category', () => {
      // Arrange
      const currentData = {
        currentListName: 'Personal',
        currentCategoryName: 'All categories',
        currentFieldName: 'To do',
        currentTask: 'Service lawn mower',
        currentFieldIndex: 0,
        taskSortOrder: 'desc'
      }

      const appData = [ ...listDataMockWithAllCategries ]
      const editedTask = 'Hello World'

      // Act
      const newData = editTaskList(appData, currentData, editedTask)

      // Assert
      const toDoTaskIndexZero = newData
      .filter((list) => list.listName === currentData.currentListName)[0].listDetails
      .filter((listDetail) => listDetail.categoryName === currentData.currentCategoryName)[0].details
      .filter((detail) => detail.fieldName === currentData.currentFieldName)[0].tasks[0]

      const allCategoryTaskIndexZero = newData
      .filter((list) => list.listName === currentData.currentListName)[0].listDetails
      .filter((listDetail) => listDetail.categoryName === 'To Do')[0].details
      .filter((detail) => detail.fieldName === currentData.currentFieldName)[0].tasks[0]

      expect(toDoTaskIndexZero.task).to.equal(editedTask)
      expect(allCategoryTaskIndexZero.task).to.equal(editedTask)
    })
  })


  describe.only('getCurrentTask()', () => {
    it('should get current task...' , () => {
      // Arrange
      const currentData = {
        currentListName: 'Personal',
        currentCategoryName: 'To Do',
        currentFieldName: 'To do',
        currentTask: 'Hello World',
        currentFieldIndex: 0,
        taskSortOrder: 'desc'
      }
      const appData = [ ...listDataMockWithAllCategries ]
      const newFieldName = 'Doing'
      console.log(getCurrentTask(appData, currentData))
      expect(getCurrentTask(appData, currentData).task).to.equal('Hello World')
    })
  })

  describe.only('deleteAndUpdateCurrentTask()', () => {
    it('should delete and update task status...' , () => {
      // Arrange
      const currentData = {
        currentListName: 'Personal',
        currentCategoryName: 'To Do',
        currentFieldName: 'To do',
        currentTask: 'Hello World',
        currentFieldIndex: 0,
        taskSortOrder: 'desc'
      }

      const task = { task: 'Hello World', createdDate: new Date('2019-01-02T00:00:00.000Z')}
      const appData = [ ...listDataMockWithAllCategries ]
      const newFieldName = 'Doing'
      deleteAndUpdateCurrentTask(appData, currentData, task, 'Done')
      console.log(JSON.stringify(appData, null, 4))
    })
  })
})

