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
  DataContext,
  UiContext
} from '../../AppContext'

import {
  IListData,
  ICurrentData,
  IUiData
} from '../../types/models'

import {
  getCurrentListDetails,
  getCurrentCategoryDetails,
  getCurrentFieldTaskList,
  sortTaskByCreatedDate
} from '../utils/appDataPicker'

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']

const DetailsMain = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, React.Dispatch<React.SetStateAction<ICurrentData>>]>(CurrentContext)
  const [appData, setAppData] = useContext<[Array<IListData>, React.Dispatch<React.SetStateAction<Array<IListData>>>]>(DataContext)
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const currentListDetails = getCurrentListDetails(appData, currentData.currentListName)
  const currentCategoryDetails = getCurrentCategoryDetails(currentListDetails, currentData.currentCategoryName)
  const currentFieldTaskList = getCurrentFieldTaskList(currentCategoryDetails, currentData.currentFieldName)
  const sortedTaskList = sortTaskByCreatedDate(currentFieldTaskList, currentData.taskSortOrder)

  // update sort order by clicking
  const updateSortOrder = () => {
    setCurrentData((prevCurrentData: ICurrentData) => {
      let sortOrder
      if (prevCurrentData.taskSortOrder === 'desc') {
        sortOrder = 'asc'
      } else  {
        sortOrder = 'desc'
      }
      return {
        ...prevCurrentData,
        taskSortOrder: sortOrder
      }
    })
  }

  const updateDeleteAllMenu = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, deleteAllMenu: true, backgroundDiv: true }
    })
  }

  // const headerBg = () => {

  // }

  return (
    <React.Fragment>
      <div className='detail-task-container'>
        <div className={`details-header-top-container ${headerBgClass[currentData.currentFieldIndex]}`}>
          <div className='details-header-section-container'>
            <Link to='/'><LeftArrowIcon /></Link>
            <span className='details-header-title'>
              {currentData.currentFieldName} ({(sortedTaskList || []).length})
              </span>
          </div>
          <div className='details-header-section-container'>
            <span onClick={updateSortOrder}>
              <SortIcon />
            </span>
            <span onClick={updateDeleteAllMenu}>
              <EllipsisVIcon />
            </span>
          </div>
        </div>
        <DetailsTaskList currentFieldTaskList={sortedTaskList} />
      </div>
      <AddIcon />
    </React.Fragment>
  )
}

export default DetailsMain
