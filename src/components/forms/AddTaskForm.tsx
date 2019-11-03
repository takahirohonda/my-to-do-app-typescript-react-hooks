import * as React from 'react'
import { useContext, useRef, useEffect, useState } from 'react'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import TrashIcon from '../svg/TrashIcon'
import {
  UiContext,
  CurrentContext
} from '../../AppContext'
import {
  IUiData,
  ICurrentData
} from '../../types/models'

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']
const tickBgClass = ['to-do-bg-dark', 'doing-bg-dark', 'done-bg-dark', 'backlog-bg-dark']

const AddTaskForm = () => {
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ task, setTask ] = useState<string>('')
  const inputEl = useRef(null)

  const uiClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, addTask: false }
    })
  }

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTask((e.target as HTMLInputElement).value)
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
          <span onClick={uiClickHandler}>
            <TrashIcon />
          </span>
        </div>
        <div className='task-input-container'>
          <input
            type='text'
            className='task-input-field'
            placeholder='Add task here...'
            value={task}
            onChange={inputChangeHandler}
            ref={inputEl} />
        </div>
        <div
          className={`task-input-save-tick ${tickBgClass[currentData.currentStatusIndex]}`}
          onClick={uiClickHandler}>
          &#x2713;
        </div>
      </header>
    </div>
  )
}

export default AddTaskForm
