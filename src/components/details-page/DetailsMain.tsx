import * as React from 'react'
import { Link } from 'react-router-dom'
import SortIcon from '../svg/SortIcon'
import EllipsisVIcon from '../svg/EllipsisVIcon'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import AddIcon from './AddIcon'
import DetailsTaskList from './DetailsTaskList'
import { useContext } from 'react'
import {
  CurrentContext,
  DataContext
} from '../../AppContext'

import {
  IListData,
  ICurrentData
} from '../../types/models'

import {
  getCurrentListDetails,
  getCurrentCategoryDetails,
  getCurrentFieldTaskList
} from '../utils/appDataPicker'

const DetailsMain = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, React.Dispatch<React.SetStateAction<ICurrentData>>]>(CurrentContext)
  const [appData, setAppData] = useContext<[Array<IListData>, React.Dispatch<React.SetStateAction<Array<IListData>>>]>(DataContext)
  const currentListDetails = getCurrentListDetails(appData, currentData.currentListName)
  const currentCategoryDetails = getCurrentCategoryDetails(currentListDetails, currentData.currentCategoryName)
  const currentFieldTaskList = getCurrentFieldTaskList(currentCategoryDetails, currentData.currentFieldName)

  return (
    <React.Fragment>
      <div className='detail-task-container'>
        <div className='details-header-top-container'>
          <div className='details-header-section-container'>
            <Link to='/'><LeftArrowIcon /></Link>
            <span className='details-header-title'>
              {currentData.currentFieldName} ({(currentFieldTaskList || []).length})
              </span>
          </div>
          <div className='details-header-section-container'>
            <SortIcon />
            <EllipsisVIcon />
          </div>
        </div>
        <DetailsTaskList currentFieldTaskList={currentFieldTaskList} />
      </div>
      <AddIcon />
    </React.Fragment>
  )
}

export default DetailsMain
