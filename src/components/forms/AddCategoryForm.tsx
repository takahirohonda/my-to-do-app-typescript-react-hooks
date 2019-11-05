import * as React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import AllFieldsRequiredPopup from './AllFieldsRequiredPopup'
import { UiContext } from '../../AppContext'
import { IUiData } from '../../types/models'


interface IAddCategoryFormProps {
  active: boolean
  submitHandler: (newCategoryData: any) => void
  cancelHandler: () => void
}

const AddCategoryForm = ({
  active,
  submitHandler,
  cancelHandler }: IAddCategoryFormProps) => {
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)
  const [category, setCategory] = useState<string>('')
  const [toDoStatus, setToDoStatus] = useState<string>('')
  const [doingStatus, setDoingStatus] = useState<string>('')
  const [doneStatus, setDoneStatus] = useState<string>('')
  const [backlogStatus, setBacklogStatus] = useState<string>('')
  const inputEl = useRef(null)
  const btnEl = useRef(null)

  const onFocusHandler = () => {
    setTimeout(() => {
      btnEl.current.scrollIntoView({behavior: 'smooth', block: 'start'})
      console.log('input focused')
    }, 0)
  }

  useEffect(() => {
    if (active) {
      inputEl.current.focus()
    }
  }, [uiData])


  const resetAllFields = () => {
    setCategory('')
    setToDoStatus('')
    setDoingStatus('')
    setDoneStatus('')
    setBacklogStatus('')
  }

  const handleSubmit = () => {
    if (category.length
      && toDoStatus.length
      && doingStatus.length
      && doneStatus.length
      && backlogStatus.length) {
      submitHandler({
        category: category,
        toDoStatus: toDoStatus,
        doingStatus: doingStatus,
        doneStatus: doneStatus,
        backlogStatus: backlogStatus
      })
      resetAllFields()
    } else {
      setUiData((prevUiData: IUiData): IUiData => {
        return { ...prevUiData, allRequired: true, backgroundDivTop: true, backgroundDiv: true }
      })
    }
  }

  const onCancelHandler = () => {
    cancelHandler()
    resetAllFields()
  }

  return (
    <>
      <AllFieldsRequiredPopup />
      <div className={`add-category-form-container ${active ? 'active' : ''}`}>
        <form className='add-category-form'>
          <label htmlFor='category' className='form-label'>Category</label>
          <input
            type='text'
            className='form-input'
            id='category'
            name='category'
            placeholder='Add new category name...'
            required
            aria-required='true'
            value={category}
            onChange={e => setCategory(e.target.value)}
            ref={inputEl} />

          <label htmlFor='todofieldname' className='form-label'>To do</label>
          <input
            type='text'
            className='form-input'
            id='todofieldname'
            name='todofieldname'
            placeholder='Add To do status name...'
            required
            aria-required='true'
            value={toDoStatus}
            onChange={e => setToDoStatus(e.target.value)} />

          <label htmlFor='doingfieldname' className='form-label'>Doing</label>
          <input
            type='text'
            className='form-input'
            id='doingfieldname'
            name='doingfieldname'
            placeholder='Add Doing status name...'
            required
            aria-required='true'
            value={doingStatus}
            onFocus={onFocusHandler}
            onChange={e => setDoingStatus(e.target.value)} />
          <label htmlFor='donefieldname' className='form-label'>Done</label>
          <input
            type='text'
            className='form-input'
            id='donefieldname'
            name='donefieldname'
            placeholder='Add Done status name...'
            required
            aria-required='true'
            value={doneStatus}
            onFocus={onFocusHandler}
            onChange={e => setDoneStatus(e.target.value)} />

          <label htmlFor='backlogfieldname' className='form-label'>Backlog</label>
          <input
            type='text'
            className='form-input'
            id='backlogfieldname'
            name='backlogfieldname'
            placeholder='Add Backlog status name...'
            required
            aria-required='true'
            value={backlogStatus}
            onFocus={onFocusHandler}
            onChange={e => setBacklogStatus(e.target.value)} />

          <div className='form-button-container'>
            <button
              type='button'
              className='submit-button btn-color-done'
              onClick={handleSubmit}
              ref={btnEl}>
              Add
          </button>
            <button
              type='button'
              className='cancel-button btn-color-done'
              onClick={onCancelHandler}>
              Cancel
          </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCategoryForm
