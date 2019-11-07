import * as React from 'react'

interface IDeleteListConfirmFormProps {
  deleteConfirmHandler: () => void
  cancelHandler: () => void
  active: boolean
}

const DeleteListConfirmForm = ({ deleteConfirmHandler, cancelHandler, active }: IDeleteListConfirmFormProps) => {

  return (
    <div className={`delete-confirm-form-container ${active ? 'active' : ''}`}>
      <form className='delete-confirm-form'>
        <p className='delete-confirm-message'>Are you sure to delete this?</p>
        <div className='form-button-container'>
          <button
            type='button'
            onClick={deleteConfirmHandler}
            className='submit-button submit-list-btn btn-color-todo'>
            Confirm
        </button>
          <button
            type='button'
            onClick={cancelHandler}
            className='cancel-button btn-color-todo cancel-list-btn'>
            Cancel
        </button>
        </div>
      </form>
    </div>
  )
}

export default DeleteListConfirmForm
