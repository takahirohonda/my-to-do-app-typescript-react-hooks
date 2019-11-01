import * as React from 'react'
import { ITasks } from '../../types/models'

export interface IDetailsTaskListProps {
  currentFieldTaskList: ITasks[]
}

const DetailsTaskList = ({currentFieldTaskList}: IDetailsTaskListProps) => {

  return (
    <section className='list-section'>
      {currentFieldTaskList.map((task, index) => {
        return (
          <div className='item-outer-container' key={index}>
            <div className='item-inner-container'>
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

