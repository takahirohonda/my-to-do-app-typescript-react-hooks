import { initialMtd } from './initialMtd'
import {
  IListData,
  ICurrentData,
  IUiData
} from '../types/models'

export const initialStateMtd: Array<IListData> = initialMtd

export const initialStateCurrent: ICurrentData = {
  currentListName: 'Personal',
  currentCategoryName: 'To Do',
  currentFieldName: 'To do'
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
  sortMenu: false,
  deleteAllMenu: false,
  deleteAllConfirm: false
}
