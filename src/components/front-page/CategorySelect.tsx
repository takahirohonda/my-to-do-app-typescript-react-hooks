import * as React from 'react'
import { useContext } from 'react'
import {
  CurrentContext,
  DataContext
} from '../../AppContext'

const CategorySelect = () => {
  const [currentData, setCurrentData] = useContext<any>(CurrentContext)
  const [appData, setAppData] = useContext<any>(DataContext)
  console.log(appData)
  const categoryList = getCategoryList(currentData, appData)
  console.log(categoryList)

  return (
    <select id='category' className='nav-bar-select' name='category'>
      <option value='all'>All categories</option>
      {categoryList.map((category, index) => {
        return (
          <option value={category} key={index}>{category}</option>
        )
      })

      }
      {/* <option value='all'>All categories</option>
      <option value='do'>To Do</option>
      <option value='learn'>To Learn</option>
      <option value='ask'>To Ask</option>
      <option value='read'>To read</option>
      <option value='decide'>To Decide</option>
      <option value='watch'>To Watch</option>
      <option value='listen'>To Listen</option>
      <option value='shop'>To Shop</option> */}
    </select>
  )
}

export default CategorySelect

const getCategoryList = (currentData: any, data: any) => {
  console.log('current data', currentData)
  const categoryFromCurrentList =
    data
      .filter((list: { listName: any; }) => list.listName === currentData.currentListName)

  console.log('category from current list', categoryFromCurrentList)
  const categoryArray: Array<string> = []
  categoryFromCurrentList[0].listDetails.forEach((listDetail: any) => {
    console.log(listDetail)
    categoryArray.push(listDetail.categoryName)
  })
  return categoryArray
}
