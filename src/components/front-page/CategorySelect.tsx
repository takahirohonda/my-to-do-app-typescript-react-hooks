import * as React from 'react'
import { useContext } from 'react'
import {
  CurrentContext,
  DataContext
} from '../../AppContext'
import {
  IListData,
  ICurrentData
} from '../../types/models'
import { getCategoryList } from '../utils/getCategoryList'


const CategorySelect = () => {
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ appData, setAppData ] = useContext<[Array<IListData>, any]>(DataContext)
  const categoryList = getCategoryList(currentData, appData)

  // update category data from select onChange event
  const updateCategory = (e: React.FormEvent<HTMLSelectElement>) => {
    e.persist()
    setCurrentData((prevCurrentData: ICurrentData) => {
      return {
        ...prevCurrentData,
        currentCategoryName: (e.target as HTMLSelectElement).value
      }
    })
  }

  // always place all categories to the top of the select list
  const sortedArray = categoryList.sort((a, b) => {
    return a.toLowerCase() === 'all categories' ? -1 : 1
  })

  return (
    < select id= 'category' className= 'nav-bar-select' name= 'category' value= {currentData.currentCategoryName} onChange= {updateCategory} >
      {sortedArray.map((category, index) => {
        return (
          <option value={category} key={index}>{category}</option>
        )
      })}
    </select >
  )
}

export default CategorySelect
