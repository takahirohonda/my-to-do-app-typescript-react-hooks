import * as React from 'react'
import { useContext } from 'react'
import { ITasks } from '../../types/models'
import {
  CurrentContext,
  DataContext,
  UiContext
} from '../../AppContext'

import {
  IListData,
  ICurrentData,
  IUiData
} from '../../types/models'

export interface IDetailsTaskListProps {
  currentFieldTaskList: ITasks[]
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
      return { ...currentData, currentTask: task }
    })
  }
  return (
    <section className='list-section'>
      {currentFieldTaskList.map((task, index) => {
        return (
          <div className='item-outer-container' key={index}>
            <div
              className={`item-inner-container ${headerBgClass[currentData.currentFieldIndex]}`}
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

