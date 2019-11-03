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

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']

const DetailsMain = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)
  const [taskData, setTaskData] = useContext<[ITask[], any]>(TaskContext)
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const currentTasks = getCurrentTasks(taskData, currentData)
  const sortedTaskList = sortTaskByCreatedDate(currentTasks, currentData.taskSortOrder)

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
              {currentData.currentStatus} ({(sortedTaskList || []).length})
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

const getCurrentTasks = (tasks: ITask[], currentData: ICurrentData) => {

  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return tasks
      .filter((task) => task.listName === currentData.currentListName
      && task.status === currentData.currentStatus)
  } else  {
    return tasks
      .filter((task) => task.listName === currentData.currentListName
      && task.categoryName === currentData.currentCategoryName
      && task.status === currentData.currentStatus)
  }
}

const sortTaskByCreatedDate = (tasks: ITask[], currentSortOrder: string) => {
  if (currentSortOrder.toLowerCase() === 'desc') {
    return tasks.sort((a: ITask, b: ITask): number => {
      return a.createdDate < b.createdDate ? 1 : -1
    })
  }
  else if (currentSortOrder.toLowerCase() === 'asc') {
    return tasks.sort((a: ITask, b: ITask): number => {
      return a.createdDate > b.createdDate ? 1 : -1
    })
  }
}
