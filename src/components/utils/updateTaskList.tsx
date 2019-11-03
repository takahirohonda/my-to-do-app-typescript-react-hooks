import {
  ICurrentData,
  IListData,
  IListDetails,
  IDetails,
  ITasks
} from '../../types/models'

export const editTaskList = (appData: IListData[], currentData: ICurrentData, editedTask: string) => {
  const data = [ ...appData ]
  return data.map((list: IListData) => {
    if (list.listName.toLowerCase()  === currentData.currentListName.toLowerCase() ) {
      list.listDetails.map((listDetail: IListDetails) => {
        // console.log('checking categoryName ', listDetail.categoryName)
        if (detailToBeSelected(listDetail.categoryName, currentData.currentCategoryName)) {
          listDetail.details.map((detail: IDetails) => {
            // console.log('checking fieldname ', detail.fieldName)
            if (detail.fieldName.toLowerCase()  === currentData.currentFieldName.toLowerCase() ) {
              detail.tasks.map((task: ITasks) => {
                // console.log('checking task ', task)
                if (task.task.toLowerCase().trim() === currentData.currentTask.toLowerCase().trim()) {
                  // console.log('checking task.task ', task.task)
                  // task =  { ...task, task: editedTask }
                  task.task = editedTask
                }
              })
            }
          })
        }
      })
    }
    return list
  }) // end of map
}

const detailToBeSelected = (categoryName: string, currentCategoryName: string): boolean => {
  return (currentCategoryName.toLowerCase() !== 'all categories'
  && (categoryName.toLowerCase() === currentCategoryName.toLowerCase()
  || categoryName.toLowerCase() === 'all categories'))
  ||
  (currentCategoryName.toLowerCase() === 'all categories'
  && (categoryName.toLowerCase() === 'to do'
  || categoryName.toLowerCase() === 'all categories'))
}
export const getCurrentTask = (appData: IListData[], currentData: ICurrentData)  => {
    return (appData || [])
      .filter((list) => list.listName.toLowerCase() === currentData.currentListName.toLowerCase())[0].listDetails
      .filter((listDetail) => listDetail.categoryName.toLowerCase() === currentData.currentCategoryName.toLowerCase())[0].details
      .filter((detail) => detail.fieldName.toLowerCase() === currentData.currentFieldName.toLowerCase())[0].tasks
      .filter((task) => task.task.toLowerCase() === currentData.currentTask.toLowerCase())[0]
  }

export const deleteAndUpdateCurrentTask = (appData: IListData[],
  currentData: ICurrentData,
  editedTask: ITasks,
  fieldName: string)  => {
  return appData.map((list: IListData) => {
    if (list.listName.toLowerCase()  === currentData.currentListName.toLowerCase() ) {
      list.listDetails.map((listDetail: IListDetails) => {
        // console.log('checking categoryName ', listDetail.categoryName)
        if (detailToBeSelected(listDetail.categoryName, currentData.currentCategoryName)) {
          listDetail.details.map((detail: IDetails) => {
            // console.log('checking fieldname ', detail.fieldName)
            if (detail.fieldName.toLowerCase()  === currentData.currentFieldName.toLowerCase() ) {
              detail.tasks.map((task: ITasks, index: number) => {
                // console.log('checking task ', task)
                if (task.task.toLowerCase().trim() === currentData.currentTask.toLowerCase().trim()) {
                  // console.log('checking task.task ', task.task)
                  delete detail.tasks[index]
                }
              })
            } else if (detail.fieldName.toLowerCase()  === fieldName.toLowerCase()) {
              detail.tasks.push(editedTask)
            }
          })
        }
      })
    }
  }) // end of map
}

export const updateTaskListStatus = (appData: IListData[], currentData: ICurrentData, editedTask: string, fieldName: string) => {
  return appData.map((list: IListData) => {
    if (list.listName.toLowerCase()  === currentData.currentListName.toLowerCase() ) {
      list.listDetails.map((listDetail: IListDetails) => {
        // console.log('checking categoryName ', listDetail.categoryName)
        if (detailToBeSelected(listDetail.categoryName, currentData.currentCategoryName)) {
          listDetail.details.map((detail: IDetails) => {
            // console.log('checking fieldname ', detail.fieldName)
            if (detail.fieldName.toLowerCase()  === currentData.currentFieldName.toLowerCase() ) {
              detail.tasks.push({ task: editedTask, createdDate: new Date()})
            }
          })
        }
      })
    }
  }) // end of map
}

export const addTaskList = () => {
  console.log('')
}
