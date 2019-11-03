import * as React from 'react'
import { useContext } from 'react'
import {
  UiContext,
  CurrentContext
} from '../../AppContext'
import {
  IUiData,
  ICurrentData
} from '../../types/models'

const headerBgClass = ['to-do-bg', 'doing-bg', 'done-bg', 'backlog-bg']

const AddIcon = () => {

  const [uiData, setUiData ] = useContext<[IUiData, any]>(UiContext)
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)

  const clickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData,  addTask: true}
    })
  }
  return (
    <div className={`add-icon ${headerBgClass[currentData.currentStatusIndex]}`} onClick={clickHandler}>
      <span className='plus-sign'>+</span>
    </div>
  )
}
export default AddIcon
