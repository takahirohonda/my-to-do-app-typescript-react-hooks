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
import { addTaskData } from '../utils/helpers'

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']
const tickBgClass = ['to-do-bg-dark', 'doing-bg-dark', 'done-bg-dark', 'backlog-bg-dark']

const AddTaskForm = () => {
  const [ uiData, setUiData ] = useContext<[IUiData, any]>(UiContext)
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ taskData, setTaskData ] = useContext<[ITask[], any]>(TaskContext)
  const [statusData, setStatusData] = useContext<[IStatus[], any]>(StatusContext)
  const [ taskLocal, setTaskLocal ] = useState<string>('')
  const inputEl = useRef(null)

  const uiClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, addTask: false }
    })
  }

  const trashClickHandler = () => {
    setTaskLocal('')
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, addTask: false }
    })
  }

  const saveHandler = () => {
    if (taskLocal.length) {
      setTaskData((prevTaskData: ITask[]) => {
        const newTask = addTaskData(currentData, taskLocal)
        return [ ...prevTaskData, newTask]
      })
    }

    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, addTask: false }
    })
  }

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskLocal((e.target as HTMLInputElement).value)
  }

  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <div className={`add-task-container ${uiData.addTask ? 'active' : ''}`}>
      <header className={`edit-task-header ${headerBgClass[currentData.currentStatusIndex]}`}>
        <div className='edit-task-header-top'>
          <span onClick={uiClickHandler}>
            <LeftArrowIcon />
          </span>
          <span onClick={trashClickHandler}>
            <TrashIcon />
          </span>
        </div>
        <div className='task-input-container'>
          <input
            type='text'
            className='task-input-field'
            placeholder='Add task here...'
            value={taskLocal}
            onChange={inputChangeHandler}
            ref={inputEl} />
        </div>
        <div
          className={`task-input-save-tick ${tickBgClass[currentData.currentStatusIndex]}`}
          onClick={saveHandler}>
          &#x2713;
        </div>
      </header>
    </div>
  )
}

export default AddTaskForm
