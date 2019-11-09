import * as React from 'react'
import DeleteListConfirmForm from '../forms/DeleteListConfirmForm'
import AddListForm from '../forms/AddListForm'
import { useContext } from 'react'
import {
  ListContext,
  CategoryContext,
  StatusContext,
  TaskContext,
  CurrentContext,
  UiContext
} from '../../AppContext'
import {
  IList,
  ICategory,
  IStatus,
  ITask,
  ICurrentData,
  IUiData
} from '../../types/models'
import { initialStateCurrent } from '../../store/initialState'

const ListPanelFlyout = () => {

  const [listData, setListData] = useContext<[IList[], any]>(ListContext)
  const [categoryData, setCategoryData] = useContext<[ICategory[], any]>(CategoryContext)
  const [statusData, setStatusData] = useContext<[IStatus[], any]>(StatusContext)
  const [taskData, setTaskData] = useContext<[ITask[], any]>(TaskContext)
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const listClickHandler = (listName: string) => {
    setCurrentData((prevCurrentData: ICurrentData) => {
      return { ...prevCurrentData, currentListName: listName, currentCategoryName: 'All Categories' }
    })
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, listFlyout: false, backgroundDiv: false }
    })
  }

  const deleteClickHandler = () => {
    const newList = listData.filter((list) => list.listName !== currentData.currentListName)
    const newCategory = categoryData.filter((category) => category.listName !== currentData.currentListName)
    const newStatus = statusData.filter((status) => status.listName !== currentData.currentListName)
    const newTask = taskData.filter((task) => task.listName !== currentData.currentListName)

    // Reset current data
    setCurrentData((): ICurrentData => {
      return initialStateCurrent
    })
    // Update all data
    setListData((): IList[] => {
      return newList
    })
    setCategoryData((): ICategory[] => {
      return newCategory
    })
    setStatusData((): IStatus[] => {
      return newStatus
    })
    setTaskData((): ITask[] => {
      return newTask
    })
    // setting UiData
    setUiData((prevUiData: IUiData): IUiData => {
      return {
        ...prevUiData,
        deleteListConfirm: false,
        backgroundDiv: true,
        backgroundDivTop: false
      }
    })
  }

  const cancelClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        deleteListConfirm: false,
        addList: false,
        backgroundDiv: true,
        backgroundDivTop: false
      }
    })
  }

  const deleteCrossClickHandler = (listName: string) => {
    setCurrentData((prevCurrentData: ICurrentData) => {
      return { ...prevCurrentData, currentListName: listName }
    })
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        deleteListConfirm: true,
        backgroundDiv: false,
        backgroundDivTop: true
      }
    })
  }

  const addListClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        addList: true,
        backgroundDivTop: true
      }
    })
  }

  const addListSubmitHandler = (listName: string) => {
    // Update all data
    setListData((prevListData: IList[]): IList[] => {
      const newList: IList = {
        listName: listName
      }
      return [...prevListData, newList]
    })
    setCategoryData((prevCategoryData: ICategory[]): ICategory[] => {
      const newCategory: ICategory = {
        categoryName: 'To Do',
        listName: listName
      }
      return [...prevCategoryData, newCategory]
    })
    setStatusData((prevStatusData: IStatus[]): IStatus[] => {
      const newStatus: IStatus[] = [{
        status: 'To do',
        statusId: 0,
        categoryName: 'To Do',
        listName: listName
      },
      {
        status: 'Doing',
        statusId: 1,
        categoryName: 'To Do',
        listName: listName
      },
      {
        status: 'Done',
        statusId: 2,
        categoryName: 'To Do',
        listName: listName
      },
      {
        status: 'Backlog',
        statusId: 3,
        categoryName: 'To Do',
        listName: listName
      }]
      return [ ...prevStatusData, ...newStatus]
    })

    // Set it to the new list
    setCurrentData((): ICurrentData => {
      return {
        currentListName: listName,
        currentCategoryName: 'All categories',
        currentStatus: 'To do',
        currentTask: '',
        currentStatusIndex: 0,
        taskSortOrder: 'desc'
      }
    })


    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        addList: false,
        backgroundDiv: true,
        backgroundDivTop: false
      }
    })
  }


  return (
    <>
      <div className={`left-nav-menu ${uiData.listFlyout ? 'active' : ''}`}>
        <div className='left-nav-header'>
          <h1 className='left-nav-header-logo'>mtd</h1>
        </div>
        <ul className='left-nav-ul'>

          {listData.map((list: IList, index: number) => {
            return (
              <li key={index}
                className={`left-nav-ls ${currentData.currentListName === list.listName ? 'active' : ''}`}>
                <div className='mdt-list-item-right' onClick={() => listClickHandler(list.listName)}>
                  <span className='square-bullet'></span>
                  <span>{list.listName}</span>
                </div>
                {!(list.listName.toLowerCase() === 'personal')
                  && <div className='mdt-list-item-left' onClick={() => deleteCrossClickHandler(list.listName)}>
                    <div className='mtd-list-remove-btn'>&#10007;</div>
                  </div>}
              </li>
            )
          })}
          <li className='left-nav-ls' id='add-list-btn'>
            <div className='mdt-list-item-right' onClick={addListClickHandler}>
              <span className='add-list-plus'>+</span>Add list
            </div>
          </li>
        </ul>
      </div>
      <DeleteListConfirmForm
        deleteConfirmHandler={deleteClickHandler}
        cancelHandler={cancelClickHandler}
        active={uiData.deleteListConfirm}
      />
      <AddListForm
        submitHandler={addListSubmitHandler}
        cancelHandler={cancelClickHandler}
        active={uiData.addList}
      />
    </>
  )
}

export default ListPanelFlyout
