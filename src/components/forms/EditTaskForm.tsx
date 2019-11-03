import * as React from 'react'
import { useContext, useRef, useEffect, useState } from 'react'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import TrashIcon from '../svg/TrashIcon'
import {
  UiContext,
  CurrentContext,
  DataContext
} from '../../AppContext'
import {
  IUiData,
  IListData,
  ICurrentData,
  ICurrentCategoryFieldNameAndCount
} from '../../types/models'
import  {
  getCurrentCategoryFieldNameAndCount,
  getCurrentCategoryDetails,
  getCurrentListDetails
} from '../utils/appDataPicker'

import {
  deleteAndUpdateCurrentTask,
  getCurrentTask
} from '../utils/updateTaskList'

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']
const tickBgclass = ['to-do-bg-dark', 'doing-bg-dark', 'done-bg-dark', 'backlog-bg-dark']

const EditTaskForm = () => {
  // context
  const [ uiData, setUiData ] = useContext<[IUiData, any]>(UiContext)
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ appData, setAppData ] = useContext<[IListData[], any]>(DataContext)
  // local state - need initial value as empty string to prevent error:
  // component is changing an uncontrolled input of type text to be controlled
  const [ task, setTask ] = useState<string>('')
  const [ selectedField, setSelectedField ] = useState<string>('')
  // ref
  const inputEl = useRef(null)

  const currentCategoryFieldNameAndCount: Array<ICurrentCategoryFieldNameAndCount>
    = getCurrentCategoryFieldNameAndCount(
      getCurrentCategoryDetails(
        getCurrentListDetails(appData, currentData.currentListName), currentData.currentCategoryName
      ))

  const uiClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, editTask: false }
    })
  }

  const taskEditSubmitHandler = () => {

    setAppData((prevAppData: IListData[]) => {
      const currentTask = getCurrentTask(appData, currentData)
      const newData = deleteAndUpdateCurrentTask(appData, currentData, currentTask, selectedField)
      return { ...prevAppData, newData }
    })

    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, editTask: false }
    })
  }

  const radioChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSelectedField((e.target as HTMLInputElement).value)
  }

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTask((e.target as HTMLInputElement).value)
  }


  useEffect(() => {
    setTask(currentData.currentTask)
    setSelectedField(currentData.currentFieldName)
    inputEl.current.focus()
  }, [currentData])

  return (
    <div className={`edit-task-container ${uiData.editTask ? 'active' : ''}`}>
      <header className={`edit-task-header ${headerBgClass[currentData.currentFieldIndex]}`}>
        <div className='edit-task-header-top'>
          <span onClick={uiClickHandler}>
            <LeftArrowIcon />
          </span>
          <span onClick={uiClickHandler}>
            <TrashIcon />
          </span>
        </div>
        <div className='task-input-container'>
          <input
            type='text'
            className='task-input-field'
            value={task}
            onChange={inputChangeHandler}
            ref={inputEl} />
        </div>
        <div
          className={`task-input-save-tick ${tickBgclass[currentData.currentFieldIndex]}`}
          onClick={taskEditSubmitHandler}>
          &#x2713;
        </div>
      </header>

      <div className='radio-button-container' role='radiogroup'>
        {(currentCategoryFieldNameAndCount || []).map((data: ICurrentCategoryFieldNameAndCount, index: number) => {
          const formattedFieldName = data.fieldName.replace(' ', '').toLowerCase()
          return (
            <div className='radio-button-group' tabIndex={0} key={index}>
              <input
                type='radio'
                className='radio-input'
                id={formattedFieldName}
                name='status-group'
                value={data.fieldName}
                onChange={radioChangeHandler}
                checked={data.fieldName === selectedField} />
          <label className='radio-label' htmlFor={formattedFieldName}>
            <span className='ph-tick'></span>
            {data.fieldName}
          </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditTaskForm
