import * as React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import { UiContext } from '../../AppContext'
import { IUiData } from '../../types/models'

interface IAddListFormProps {
  submitHandler: (listName: string) => void
  cancelHandler: () => void
  active: boolean
}

const AddListForm = ({submitHandler, cancelHandler, active}: IAddListFormProps) => {

  const [ listLocal, setListLocal ] = useState<string>('')
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const inputEl = useRef(null)

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setListLocal((e.target as HTMLInputElement).value)
  }

  useEffect(() => {
    if (active) {
      inputEl.current.focus()
    }
  }, [uiData])

  const onSubmitHandler = () => {
    if (listLocal.length) {
      submitHandler(listLocal)
    }
    setListLocal('')
  }

  const onCancelHandler = () => {
    cancelHandler()
    setListLocal('')
  }
  return (
    <div className={`add-list-form-container ${active ? 'active' : ''}`}>
      <form className='add-list-form'>
        <label htmlFor='category' className='form-label'>List</label>
        <input
          type='text'
          className='form-input'
          id='category'
          name='category'
          placeholder='Add new list name...'
          required
          aria-required='true'
          onChange={inputChangeHandler}
          value={listLocal}
          ref={inputEl} />
        <div className='form-button-container'>
          <button
            type='button'
            className='submit-button btn-color-done submit-list-btn'
            onClick={onSubmitHandler}>
            Add
        </button>
          <button
            type='button'
            className='cancel-button btn-color-done cancel-list-btn'
            onClick={onCancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div >
  )
}

export default AddListForm
