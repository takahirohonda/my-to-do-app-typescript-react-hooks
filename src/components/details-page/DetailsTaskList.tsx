import * as React from 'react'
import { useContext } from 'react'
import { ITask } from '../../types/models'
import {
  CurrentContext,
  UiContext
} from '../../AppContext'

import {
  ICurrentData,
  IUiData
} from '../../types/models'

export interface IDetailsTaskListProps {
  currentFieldTaskList: ITask[]
}

const headerBgClass = ['todo-item-bg', 'doing-item-bg', 'done-item-bg', 'backlog-item-bg']

const DetailsTaskList = ({currentFieldTaskList}: IDetailsTaskListProps) => {
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ uiData, setUiData ] = useContext<[IUiData, any]>(UiContext)

  const clickHandler = (task: string) => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, editTask: true }
    })
    setCurrentData((prevCurrentData: ICurrentData) => {
      return { ...prevCurrentData, currentTask: task }
    })
  }
  return (
    <section className='list-section'>
      {currentFieldTaskList.map((task, index) => {
        return (
          <div className='item-outer-container' key={index}>
            <div
              className={`item-inner-container ${headerBgClass[currentData.currentStatusIndex]}`}
              onClick={() => clickHandler(task.task)}>
              <p className='item'>
                {index + 1}. {task.task}
              </p>
              <hr />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default DetailsTaskList

