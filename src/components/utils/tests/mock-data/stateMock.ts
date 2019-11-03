import {
  ICurrentData,
  IUiData
} from '../../../../types/models'

export const stateCurrentAllCategories: ICurrentData = {
  currentListName: 'Personal',
  currentCategoryName: 'All categories',
  currentFieldName: 'To do',
  currentTask: '',
  currentFieldIndex: 0,
  taskSortOrder: 'desc'
}

export const stateCurrentToDoForEdit: ICurrentData = {
  currentListName: 'Personal',
  currentCategoryName: 'To do',
  currentFieldName: 'To do',
  currentTask: 'Service lawn mower',
  currentFieldIndex: 0,
  taskSortOrder: 'desc'
}

export const initialStateUi: IUiData = {
  listMenu: false,
  addList: false,
  deleteListConfirm: false,
  addCategoryMenu: false,
  addCategory: false,
  deleteCategory: false,
  detailsPage: false,
  editTask: false,
  addTask: false,
  deleteAllMenu: false,
  deleteAllConfirm: false,
  backgroundDiv: false,
  backgroundDivTop: false
}

