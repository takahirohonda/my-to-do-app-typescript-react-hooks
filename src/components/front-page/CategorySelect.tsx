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
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, React.Dispatch<React.SetStateAction<ICurrentData>>]>(CurrentContext)
  const [ appData, setAppData ] = useContext<[Array<IListData>, React.Dispatch<React.SetStateAction<Array<IListData>>>]>(DataContext)
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

  return (
    <select id='category' className='nav-bar-select' name='category' onChange={updateCategory}>
      <option value='all'>All categories</option>
      {categoryList.map((category, index) => {
        return (
          <option value={category} key={index}>{category}</option>
        )
      })
      }
    </select>
  )
}

export default CategorySelect
