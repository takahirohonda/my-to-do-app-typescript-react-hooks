import { expect } from 'chai'
import {
  getCurrentListDetails,
  getCurrentCategoryDetails,
  getCurrentFieldTaskList,
  sortTaskByCreatedDate
} from '../appDataPicker'

describe('appDataPicker', () => {
  describe('sortTaskByCreatedDate()', () => {
    it('should sort date in desc order', () => {
      const taskList = [
        {
          task: 'Service lawn mower',
          createdDate: new Date('2019-01-02')
        },
        {
          task: 'Go shopping',
          createdDate: new Date('2018-03-02')
        },
        {
          task: 'Water the garden',
          createdDate: new Date('2020-04-01')
        }
      ]

      const expectedOutput = [
        {
          task: 'Water the garden',
          createdDate: new Date('2020-04-01')
        },
        {
          task: 'Service lawn mower',
          createdDate: new Date('2019-01-02')
        },
        {
          task: 'Go shopping',
          createdDate: new Date('2018-03-02')
        }
      ]

      const sorted = sortTaskByCreatedDate(taskList, 'desc')
      // console.log(sorted)
      expect(sorted).to.deep.equal(expectedOutput)
    })

    it('should sort date in asc order', () => {
      const taskList = [
        {
          task: 'Service lawn mower',
          createdDate: new Date('2019-01-02')
        },
        {
          task: 'Go shopping',
          createdDate: new Date('2018-03-02')
        },
        {
          task: 'Water the garden',
          createdDate: new Date('2020-04-01')
        }
      ]

      const expectedOutput = [
        {
          task: 'Go shopping',
          createdDate: new Date('2018-03-02')
        },
        {
          task: 'Service lawn mower',
          createdDate: new Date('2019-01-02')
        },
        {
          task: 'Water the garden',
          createdDate: new Date('2020-04-01')
        }
      ]

      const sorted = sortTaskByCreatedDate(taskList, 'asc')
      // console.log(sorted)

      expect(sorted).to.deep.equal(expectedOutput)
    })
  })
})
