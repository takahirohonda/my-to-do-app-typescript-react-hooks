import * as React from 'react'
import { useContext } from 'react'
import {
  UiContext,
  CurrentContext,
  TaskContext
} from '../../AppContext'
import {
  IUiData,
  ICurrentData,
  ITask
} from '../../types/models'

import { clearIndexedDB } from '../../helpers/IndexedDB'


const btnColorClass = ['btn-color-todo', 'btn-color-doing', 'btn-color-done', 'btn-color-backlog']

const ResetAllDataConfirmForm = () => {
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const [currentData, setCurrentData] = useContext<[ICurrentData, any]>(CurrentContext)

  const onClickConfirm = () => {

    clearIndexedDB()
      .then((success) => {
        console.log('checking indexDB clear message', success)
        location.reload()
      }).catch((err) => {
        console.error('error in clearing DB: ', err)
        location.reload()
      })
  }

  const onClickCancel = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        addCategoryMenu: false,
        resetAllDataConfirm: false,
        backgroundDiv: false
      }
    })
  }

  return (
    <div className={`delete-confirm-form-container-details ${uiData.resetAllDataConfirm ? 'active' : ''}`}>
      <form className='delete-confirm-form'>
        <div className='reset-all-message-container'>
          <p className='reset-all-confirm-message'>This will delete all your data.</p>
          <p className='reset-all-confirm-message'>Are you sure to re-initialise this app?</p>
        </div>
        <div className='form-button-container'>
          <button
            type='button'
            className={`submit-button ${btnColorClass[currentData.currentStatusIndex]} delete-all-confirm-btn`}
            onClick={onClickConfirm}>
            Confirm
          </button>
          <button
            type='button'
            className={`cancel-button ${btnColorClass[currentData.currentStatusIndex]} delete-all-cancel-btn`}
            onClick={onClickCancel}>
            Cancel
            </button>
        </div>
      </form>
    </div>
  )
}

export default ResetAllDataConfirmForm
