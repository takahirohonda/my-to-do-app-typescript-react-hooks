import * as React from 'react'

const AddCategoryForm = () => {

  return (
    <div className='add-category-form-container'>
      <form className='add-category-form'>
        <label htmlFor='category' className='form-label'>Category</label>
        <input
          type='text'
          className='form-input'
          id='category'
          name='category'
          placeholder='Add new category name...'
          required
          aria-required='true' />

        <label htmlFor='todofieldname' className='form-label'>To do</label>
        <input
          type='text'
          className='form-input'
          id='todofieldname'
          name='todofieldname'
          placeholder='Add To do field name...'
          required
          aria-required='true' />

        <label htmlFor='doingfieldname' className='form-label'>Doing</label>
        <input
          type='text'
          className='form-input'
          id='doingfieldname'
          name='doingfieldname'
          placeholder='Add Doing field name...'
          required
          aria-required='true' />
        <label htmlFor='donefieldname' className='form-label'>Done</label>
        <input
          type='text'
          className='form-input'
          id='donefieldname'
          name='donefieldname'
          placeholder='Add Done field name...'
          required
          aria-required='true' />

        <label htmlFor='backlogfieldname' className='form-label'>Backlog</label>
        <input
          type='text'
          className='form-input'
          id='backlogfieldname'
          name='backlogfieldname'
          placeholder='Add Backlog field name...'
          required
          aria-required='true' />

        <div className='form-button-container'>
          <button type='button' className='submit-button btn-color-done'>Add</button>
          <button type='button' className='cancel-button btn-color-done'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategoryForm
