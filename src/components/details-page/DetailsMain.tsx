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
  TaskContext,
  UiContext
} from '../../AppContext'

import {
  ITask,
  ICurrentData,
  IUiData
} from '../../types/models'

import {
  getCurrentTasks,
  sortTaskByCreatedDate
} from '../utils/helpers'

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']

const DetailsMain = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)
  const [taskData, setTaskData] = useContext<[ITask[], any]>(TaskContext)
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const currentTasks = getCurrentTasks(taskData, currentData)
  const sortedTasks = sortTaskByCreatedDate(currentTasks, currentData.taskSortOrder)
  console.log('check sort order', currentData.taskSortOrder)
  console.log('check array', sortedTasks)
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


  return (
    <React.Fragment>
      <div className='detail-task-container'>
        <div className={`details-header-top-container ${headerBgClass[currentData.currentStatusIndex]}`}>
          <div className='details-header-section-container'>
            <Link to='/'><LeftArrowIcon /></Link>
            <span className='details-header-title'>
              {currentData.currentStatus} ({(sortedTasks || []).length})
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
        <DetailsTaskList currentFieldTaskList={sortedTasks} />
      </div>
      <AddIcon />
    </React.Fragment>
  )
}

export default DetailsMain
