import * as React from 'react'
import { useContext } from 'react'
import {
  CurrentContext,
  CategoryContext
} from '../../AppContext'
import {
  ICategory,
  ICurrentData
} from '../../types/models'

const CategorySelect = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)
  const [categoryData, setCategoryData] = useContext<[ICategory[], any]>(CategoryContext)
  const categoryList = categoryData.filter((data) => data.listName === currentData.currentListName)

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

  return (
    <select
      id='category'
      className='nav-bar-select'
      name='category'
      value={currentData.currentCategoryName}
      onChange={updateCategory} >
      <option value='All categories' >All categories</option>
      {categoryList.map((category, index) => {
        return (
          <option value={category.categoryName} key={index}>{category.categoryName}</option>
        )
      })}
    </select >
  )
}

export default CategorySelect
