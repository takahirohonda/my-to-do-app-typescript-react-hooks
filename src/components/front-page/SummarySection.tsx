import * as React from 'react'
import { useContext } from 'react'
import {
  CurrentContext,
  DataContext
} from '../../AppContext'
import {
  IListData,
  ICurrentData,
  ICurrentCategoryFieldNameAndCount
} from '../../types/models'

import {
  getCurrentListDetails,
  getCurrentCategoryDetails,
  getCurrentCategoryFieldNameAndCount
} from '../utils/appDataPicker'

const summarySectionClassNamePrefix = ['to-do', 'doing', 'done', 'backlog']

const SummarySection = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, React.Dispatch<React.SetStateAction<ICurrentData>>]>(CurrentContext)
  const [appData, setAppData] = useContext<[Array<IListData>, React.Dispatch<React.SetStateAction<Array<IListData>>>]>(DataContext)
  const currentCategoryFieldNameAndCount: Array<ICurrentCategoryFieldNameAndCount>
    = getCurrentCategoryFieldNameAndCount(
      getCurrentCategoryDetails(
        getCurrentListDetails(appData, currentData.currentListName), currentData.currentCategoryName
      ))

  return (
    <React.Fragment>
      {(currentCategoryFieldNameAndCount || []).map((data: ICurrentCategoryFieldNameAndCount, index: number) => {
        return (
          <div className={`summary-section ${summarySectionClassNamePrefix[index]}-summary`} key={index}>
            <div className='summary-title'>{data.fieldName}</div>
            <div className={`summary-circle ${summarySectionClassNamePrefix[index]}-summary-circle`}>
              <span className='summary-count'>{data.count}</span>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default SummarySection

