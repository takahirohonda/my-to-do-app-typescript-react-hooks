import * as React from 'react'
import { useContext } from 'react'
import {
  CurrentContext,
  StatusContext,
  TaskContext
} from '../../AppContext'
import {
  IStatus,
  ITask,
  ICurrentData
} from '../../types/models'
import {
  getCurrentStatusArray,
  getTaskCountForStatus
} from '../utils/helpers'


import { Link } from 'react-router-dom'

const summarySectionClassNamePrefix = ['to-do', 'doing', 'done', 'backlog']

const SummarySection = () => {
  const [statusData, setStatusData] = useContext<[IStatus[], any]>(StatusContext)
  const [taskData, setTaskData] = useContext<[ITask[], any]>(TaskContext)
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)

  const currentStatusArray: IStatus[] = getCurrentStatusArray(statusData, currentData)

  const updateCurrentFieldName = (fieldName: string, statusId: number) => {
    setCurrentData((prevCurrentData: ICurrentData) => {
      return {
        ...prevCurrentData,
        currentStatus: fieldName,
        currentStatusIndex: statusId
      }
    })
  }

  return (
    <React.Fragment>
      {(currentStatusArray || []).map((data: IStatus, index: number) => {
        return (
          <div className={`summary-section ${summarySectionClassNamePrefix[index]}-summary`} key={index}>
            <div className='summary-title'>{data.status}</div>
            <Link
              to='/details'
              onClick={() => updateCurrentFieldName(data.status, data.statusId)}
              className={`summary-circle ${summarySectionClassNamePrefix[index]}-summary-circle`}
            >
              <span className='summary-count'>{getTaskCountForStatus(taskData, currentData, data.statusId)}</span>
            </Link>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default SummarySection
