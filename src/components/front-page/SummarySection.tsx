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

import { Link } from 'react-router-dom'

const summarySectionClassNamePrefix = ['to-do', 'doing', 'done', 'backlog']

interface IFieldNameIndexMap {
  fieldName: string
  index: number
}

const SummarySection = () => {
  const [currentData, setCurrentData] = useContext<[ICurrentData, React.Dispatch<React.SetStateAction<ICurrentData>>]>(CurrentContext)
  const [appData, setAppData] = useContext<[Array<IListData>, React.Dispatch<React.SetStateAction<Array<IListData>>>]>(DataContext)
  const currentCategoryFieldNameAndCount: Array<ICurrentCategoryFieldNameAndCount>
    = getCurrentCategoryFieldNameAndCount(
      getCurrentCategoryDetails(
        getCurrentListDetails(appData, currentData.currentListName), currentData.currentCategoryName
      ))

  const updateCurrentFieldName = (fieldName: string) => {
    setCurrentData((prevCurrentData: ICurrentData) => {
      return {
        ...prevCurrentData,
        currentFieldName: fieldName,
        currentFieldIndex: getIndexForFieldName(fieldName)
      }
    })
  }

  // to get currentFieldIndex
  const getIndexForFieldName = (fieldName: string)
  : number => {
    const map = [] as IFieldNameIndexMap[]
    (currentCategoryFieldNameAndCount || []).map((data: ICurrentCategoryFieldNameAndCount, index: number) => {
      map.push({fieldName: data.fieldName, index: index})
    })
    return map.filter((map) => map.fieldName === fieldName)[0].index
  }

  return (
    <React.Fragment>
      {(currentCategoryFieldNameAndCount || []).map((data: ICurrentCategoryFieldNameAndCount, index: number) => {
        return (
          <div className={`summary-section ${summarySectionClassNamePrefix[index]}-summary`} key={index}>
            <div className='summary-title'>{data.fieldName}</div>
            <Link
              to='/details'
              onClick={() => updateCurrentFieldName(data.fieldName)}
              className={`summary-circle ${summarySectionClassNamePrefix[index]}-summary-circle`}
            >
              <span className='summary-count'>{data.count}</span>
            </Link>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default SummarySection

