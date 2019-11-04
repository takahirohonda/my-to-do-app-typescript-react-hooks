import {
  IStatus,
  ICurrentData,
  ITask
} from '../../types/models'


export const getCurrentStatusArray = (statusData: IStatus[], currentData: ICurrentData)
: IStatus[] => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return statusData
    .filter((data) => data.listName.toLowerCase() === 'default'
      && data.categoryName.toLowerCase() === 'default')
  } else {
    return statusData
    .filter((data) => data.listName.toLowerCase() === currentData.currentListName.toLowerCase()
      && data.categoryName.toLowerCase() === currentData.currentCategoryName.toLowerCase())
  }
}

export const getTaskCountForStatus = (taskData: ITask[], currentData: ICurrentData, statusId: number): number => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return taskData
    .filter((data) => data.listName === currentData.currentListName
      && data.statusId === statusId)
    .length
  } else {
    return taskData
    .filter((data) => data.listName.toLowerCase() === currentData.currentListName.toLowerCase()
      && data.categoryName.toLowerCase()  === currentData.currentCategoryName.toLowerCase()
      && data.statusId === statusId )
    .length
  }
}

// getting statusId for status
export const getStatusId = (targetStatus: string, statusData: IStatus[], currentData: ICurrentData) => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return statusData
    .filter((status) => status.listName === 'default'
    && status.categoryName === 'default'
    && status.status === targetStatus)[0]
    .statusId
  } else {
    return statusData
    .filter((status) => status.listName === currentData.currentListName
    && status.categoryName === currentData.currentCategoryName
    && status.status === targetStatus)[0]
    .statusId
  }
}

export const updateTaskData = (tasks: ITask[],
  currentData: ICurrentData,
  statusData: IStatus[],
  taskLocal: string,
  selectedStatus: string) => {

  return tasks.map((task: ITask) => {
    if (task.task === currentData.currentTask) {
      task.task = taskLocal
      task.status = selectedStatus
      task.statusId = getStatusId(selectedStatus, statusData, currentData)
    }
    return task
  })
}

export const addTaskData = (currentData: ICurrentData, taskLocal: string): ITask => {
  return {
    task: taskLocal,
    createdDate: new Date(),
    statusId: currentData.currentStatusIndex,
    status: currentData.currentStatus,
    listName: currentData.currentListName,
    categoryName: getCategoryName(currentData)
  }
}

// to get categoryName for addTaskData
const getCategoryName = (currentData: ICurrentData) => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return 'To Do'
  }
  return currentData.currentCategoryName
}

// Used to delete all tasks in delete all option
export const getRemainingTasks = (tasks: ITask[], currentData: ICurrentData): ITask[] => {
  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return tasks
      .filter((task) => task.listName !== currentData.currentListName
      || task.statusId !== currentData.currentStatusIndex)
  } else  {
    return tasks
      .filter((task) => task.listName !== currentData.currentListName
      || task.categoryName !== currentData.currentCategoryName
      || task.statusId !== currentData.currentStatusIndex)
  }
}

// Used to delete a single task
export const getRemainingTaskExceptCurrent = (tasks: ITask[], currentData: ICurrentData): ITask[] => {
  return (tasks || []).filter((task) => task.task.toLowerCase() !== currentData.currentTask.toLowerCase())
}

// Used in Details Main
export const getCurrentTasks = (tasks: ITask[], currentData: ICurrentData): ITask[] => {

  if (currentData.currentCategoryName.toLowerCase() === 'all categories') {
    return tasks
      .filter((task) => task.listName === currentData.currentListName
      && task.statusId === currentData.currentStatusIndex)
  } else  {
    return tasks
      .filter((task) => task.listName === currentData.currentListName
      && task.categoryName === currentData.currentCategoryName
      && task.statusId === currentData.currentStatusIndex)
  }
}

export const sortTaskByCreatedDate = (tasks: ITask[], currentSortOrder: string) => {
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
