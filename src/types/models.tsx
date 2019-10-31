// appData
export interface IListData {
  listName: string
  listDetails: IListDetails[]
}

export interface IListDetails {
  categoryName: string
  details: IDetails[]
}

export interface IDetails {
  fieldName: string
  tasks?: ITasks[]
}

export interface ITasks {
  task?: string
  createdDate?: string
}

// currentData
export interface ICurrentData {
  currentListName: string
  currentCategoryName: string
  currentFieldName: string
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
  sortMenu: boolean
  deleteAllMenu: boolean
  deleteAllConfirm: boolean
}

// Models for UI display transformed data
export interface ICurrentCategoryFieldNameAndCount {
  fieldName: string
  count: number
}
