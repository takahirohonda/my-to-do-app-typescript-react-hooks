import { expect } from 'chai'
import { IListDetails } from '../../../types/models'
import { listDataMock } from './mock-data/listDataMock'
import { createAllCategories } from '../createAllCategories'

describe('createAllCategories()', () => {
  it('should merge all the task data', () => {
    const listData = listDataMock
    const expectedData: IListDetails = {
      categoryName: 'All categories',
      details: [
        {
          fieldName: 'To do',
          tasks: [
            {
              task: 'Service lawn mower',
              createdDate: new Date('2019-01-02')
            },
            {
              task: 'Go shopping',
              createdDate: new Date('2020-03-02')
            },
            {
              task: 'Water the garden',
              createdDate: new Date('2021-04-01')
            },
            {
              task: 'React Hooks',
              createdDate: new Date('2019-01-02')
            },
            {
              task: 'Css Grid',
              createdDate: new Date('2019-03-02')
            },
            {
              task: 'Veu.js',
              createdDate: new Date('2019-04-01')
            }
          ]
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

    const output = createAllCategories(listData, 'Personal')
    // console.log(output)
    expect(output).to.deep.equal(expectedData)
  })
})
