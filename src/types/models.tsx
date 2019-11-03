// appData
export interface IList {
  listName: string
}

export interface ICategory {
  categoryName: string
  listName: string
}

export interface IStatus {
  status: string
  statusId: number
  categoryName: string
  listName: string
}

export interface ITask {
  task: string
  createdDate: Date
  statusId: number
  status: string
  listName: string
  categoryName: string
}

// currentData
export interface ICurrentData {
  currentListName: string
  currentCategoryName: string
  currentStatus: string
  currentTask: string
  currentStatusIndex: number
  taskSortOrder: string
}

// uiData
export interface IUiData {
  listMenu: boolean
  addList: boolean
  deleteListConfirm: boolean
  addCategoryMenu: boolean
  addCategory: boolean
  deleteCategory: boolean
  detailsPage: boolean
  editTask: boolean
  addTask: boolean
  deleteAllMenu: boolean
  deleteAllConfirm: boolean
  backgroundDiv: boolean
  backgroundDivTop: boolean
}

// Models for UI display transformed data
export interface ICurrentCategoryFieldNameAndCount {
  fieldName: string
  count: number
}
