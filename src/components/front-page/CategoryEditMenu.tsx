import * as React from 'react'
import { useContext } from 'react'
import {
  CategoryContext,
  StatusContext,
  TaskContext,
  CurrentContext,
  UiContext
} from '../../AppContext'
import {
  ICategory,
  IStatus,
  ITask,
  ICurrentData,
  IUiData
} from '../../types/models'
import DeleteCategoryForm from '../forms/DeleteCategoryForm'
import AddCategoryForm from '../forms/AddCategoryForm'

const CategoryEditMenu = () => {

  const [categoryData, setCategoryData] = useContext<[ICategory[], any]>(CategoryContext)
  const [statusData, setStatusData] = useContext<[IStatus[], any]>(StatusContext)
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)
  const [taskData, setTaskData] = useContext<[ITask[], any]>(TaskContext)
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const addCategoryLinkHandler = () => {
    setUiData((prevUiData: IUiData): IUiData => {
      return {
        ...prevUiData,
        addCategory: true,
        addCategoryMenu: false
      }
    })
  }

  const deleteCategoryLinkHandler = () => {

    setUiData((prevUiData: IUiData): IUiData => {
      return {
        ...prevUiData,
        deleteCategory: true,
        addCategoryMenu: false
      }
    })
  }

  const cancelHandler = () => {
    setUiData((prevUiData: IUiData): IUiData => {
      return {
        ...prevUiData,
        addCategoryMenu: false,
        deleteCategory: false,
        backgroundDiv: false,
        addCategory: false
      }
    })
  }

  const deleteCategoryFormSubmitHandler = (categoryList: string[]) => {

    setCategoryData((prevCategoryData: ICategory[]): ICategory[] => {
      return categoryData
        .filter((category: ICategory) => category.listName.toLowerCase() !== currentData.currentListName.toLowerCase()
          || (category.listName.toLowerCase() === currentData.currentListName.toLowerCase()
            && !categoryList.includes(category.categoryName)))
    })

    setStatusData((prevStatusData: IStatus[]): IStatus[] => {
      return prevStatusData
        .filter((status: IStatus) => status.listName.toLowerCase() !== currentData.currentListName.toLowerCase()
          || (status.listName.toLowerCase() === currentData.currentListName.toLowerCase()
            && !categoryList.includes(status.categoryName)))
    })

    setTaskData((prevTaskData: ITask[]): ITask[] => {
      return prevTaskData
        .filter((task: ITask) => task.listName.toLowerCase() !== currentData.currentListName.toLowerCase()
          || (task.listName.toLowerCase() === currentData.currentListName.toLowerCase()
            && !categoryList.includes(task.categoryName)))
    })

    setCurrentData((prevCurrentData: ICurrentData): ICurrentData => {

      const resetCurrentData = {
        currentListName: currentData.currentListName,
        currentCategoryName: 'All categories',
        currentStatus: 'To do',
        currentTask: '',
        currentStatusIndex: 1,
        taskSortOrder: 'desc'
      }
      return { ...prevCurrentData, ...resetCurrentData }
    })

    setUiData((prevUiData: IUiData): IUiData => {
      return {
        ...prevUiData,
        addCategoryMenu: false,
        deleteCategory: false,
        backgroundDiv: false
      }
    })
  }

  const addCategoryFormSubmitHandler = (newCategory: any) => {

    setCategoryData((prevCategoryData: ICategory[]): ICategory[] => {
      const categoryToAppend = { categoryName: newCategory.category, listName: currentData.currentListName }
      return [...prevCategoryData, categoryToAppend]
    })

    setStatusData((prevStatusData: IStatus[]): IStatus[] => {
      const statusToAppend: IStatus[] = []
      const statusKeyList = ['toDoStatus', 'doingStatus', 'doneStatus', 'backlogStatus']
      statusKeyList.forEach((statusKey: string, index: number) => {
        statusToAppend.push({
          status: newCategory[statusKey],
          statusId: index,
          categoryName: newCategory.category,
          listName: currentData.currentListName

        })
      })

      return [...prevStatusData, ...statusToAppend]
    })
    setUiData((prevUiData: IUiData): IUiData => {
      return {
        ...prevUiData,
        backgroundDiv: false,
        addCategory: false
      }
    })
  }

  return (
    <>
      <AddCategoryForm
        active={uiData.addCategory}
        submitHandler={addCategoryFormSubmitHandler}
        cancelHandler={cancelHandler}
      />
      <DeleteCategoryForm
        active={uiData.deleteCategory}
        submitHandler={deleteCategoryFormSubmitHandler}
        cancelHandler={cancelHandler}
        categoryList={categoryData.filter((data) => data.listName === currentData.currentListName)} />
      <div className={`right-nav-menu ${uiData.addCategoryMenu ? 'active' : ''}`}>
        <ul className='right-nav-ul'>
          <li className='right-nav-ls' onClick={addCategoryLinkHandler}>Add Category</li>
          <li className='right-nav-ls' onClick={deleteCategoryLinkHandler}>Delete Category</li>
        </ul>
      </div>
    </>
  )
}

export default CategoryEditMenu
