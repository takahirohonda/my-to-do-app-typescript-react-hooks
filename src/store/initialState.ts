import {
  ICurrentData,
  IUiData
} from '../types/models'

export const initialStateCurrent: ICurrentData = {
  currentListName: 'Personal',
  currentCategoryName: 'All categories',
  currentStatus: 'To do',
  currentTask: '',
  currentStatusIndex: 0,
  taskSortOrder: 'desc'
}

export const initialStateUi: IUiData = {
  listFlyout: false,
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
  backgroundDivTop: false,
  allRequired: false
}
