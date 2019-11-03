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

const DeleteAllMenu = () => {

  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)

  const clickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, deleteAllConfirm: true }
    })
  }
  return (
    <>
      <div className={`details-right-nav-menu ${uiData.deleteAllMenu ? 'active' : ''} ${headerBgClass[currentData.currentFieldIndex]}`}>
        <ul className='details-right-nav-ul'>
          <li
            className='details-right-nav-ls details-delete-all-btn'
            onClick={clickHandler}>
            Delete all</li>
        </ul>
      </div>
    </>
  )
}

export default DeleteAllMenu
