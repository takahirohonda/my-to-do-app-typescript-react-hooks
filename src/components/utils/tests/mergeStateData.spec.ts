import { expect } from 'chai'
import {
  mergeAllCategoriesByListName
} from '../mergeStateData'

describe('mergeStateData.ts', () => {
  describe('mergeAllCategoriesByListName()', () => {
    it('should merge data correctly', () => {
      const data = [
        {
          listName: 'Personal',
          listDetails: [
            {
              categoryName: 'To Do',
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

      const expected = [
        {
            'listName': 'Personal',
            'listDetails': [
                {
                    'categoryName': 'To Do',
                    'details': [] as any
                },
                {
                    'categoryName': 'All categories',
                    'details': []
                }
            ]
        },
        {
            'listName': 'Work',
            'listDetails': [
                {
                    'categoryName': 'To Do',
                    'details': []
                }
            ]
        }
    ]

      const output = mergeAllCategoriesByListName(data, dataAllCategoriesForPersonal, listName)

      expect(output).to.deep.equal(expected)
    })
  })
})
