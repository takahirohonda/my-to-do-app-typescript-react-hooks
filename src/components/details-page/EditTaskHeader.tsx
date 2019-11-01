import * as React from 'react'

const EditTaskHeader = () => {

  return (
    <header className='edit-task-header'>
    <div className='edit-task-header-top'>
      <img src='img/icons/arrow-left.svg' alt='left arrow' className='left-arrow-icon back-to-details-from-edit' />
      <img src='img/icons/trash-alt.svg' alt='trash can' className='trash-icon trash-task' />
    </div>
    <div className='task-input-container'>
      <input type='text' className='task-input-field' value='Service my lawn mower' />
    </div>
    <div className='task-input-save-tick'>&#x2713;</div>
  </header>
  )
}

export default EditTaskHeader
