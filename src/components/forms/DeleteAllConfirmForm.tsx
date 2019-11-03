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


const btnColorClass = ['btn-color-todo', 'btn-color-doing', 'btn-color-done', 'btn-color-backlog']

const DeleteAllConfirmForm = () => {
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)

  const onClickConfirm = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        deleteAllMenu: false,
        deleteAllConfirm: false,
        backgroundDiv: false
      }
    })
  }

  const onClickCancel = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        deleteAllMenu: false,
        deleteAllConfirm: false,
        backgroundDiv: false
      }
    })
  }

  return (
    <div className={`delete-confirm-form-container-details ${uiData.deleteAllConfirm ? 'active' : ''}`}>
      <form className='delete-confirm-form'>
        <p className='delete-confirm-message'>Are you sure to delete all tasks?</p>
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

export default DeleteAllConfirmForm
