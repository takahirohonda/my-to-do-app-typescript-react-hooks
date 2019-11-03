import * as React from 'react'
import { useContext, useRef, useEffect, useState } from 'react'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import TrashIcon from '../svg/TrashIcon'
import {
  UiContext,
  CurrentContext,
  TaskContext,
  StatusContext
} from '../../AppContext'
import {
  IUiData,
  ICurrentData,
  ITask,
  IStatus
} from '../../types/models'
import { getCurrentStatusArray } from '../utils/helpers'


const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']
const tickBgclass = ['to-do-bg-dark', 'doing-bg-dark', 'done-bg-dark', 'backlog-bg-dark']

const EditTaskForm = () => {
  // context
  const [ uiData, setUiData ] = useContext<[IUiData, any]>(UiContext)
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ taskData, setTaskData ] = useContext<[ITask[], any]>(TaskContext)
  const [statusData, setStatusData] = useContext<[IStatus[], any]>(StatusContext)
  // local state - need initial value as empty string to prevent error:
  // component is changing an uncontrolled input of type text to be controlled
  const [ task, setTask ] = useState<string>('')
  const [ selectedField, setSelectedField ] = useState<string>('')
  // ref
  const inputEl = useRef(null)

  const currentStatusArray: IStatus[] = getCurrentStatusArray(statusData, currentData)

  const uiClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, editTask: false }
    })
  }

  const taskEditSubmitHandler = () => {

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
    setSelectedField(currentData.currentStatus)
    inputEl.current.focus()
  }, [currentData])

  return (
    <div className={`edit-task-container ${uiData.editTask ? 'active' : ''}`}>
      <header className={`edit-task-header ${headerBgClass[currentData.currentStatusIndex]}`}>
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
          className={`task-input-save-tick ${tickBgclass[currentData.currentStatusIndex]}`}
          onClick={taskEditSubmitHandler}>
          &#x2713;
        </div>
      </header>

      <div className='radio-button-container' role='radiogroup'>
        {(currentStatusArray || []).map((data: IStatus, index: number) => {
          const formattedFieldName = data.status.replace(' ', '').toLowerCase()
          return (
            <div className='radio-button-group' tabIndex={0} key={index}>
              <input
                type='radio'
                className='radio-input'
                id={formattedFieldName}
                name='status-group'
                value={data.status}
                onChange={radioChangeHandler}
                checked={data.status === selectedField} />
          <label className='radio-label' htmlFor={formattedFieldName}>
            <span className='ph-tick'></span>
            {data.status}
          </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditTaskForm
