import * as React from 'react'
import { useRef, useState } from 'react'
import { ICategory } from '../../types/models'

interface IDeleteCategoryFormProps {
  active: boolean
  submitHandler: (categoryList: string[]) => void
  cancelHandler: () => void
  categoryList: ICategory[]
}

const DeleteCategoryForm = ({
  active,
  submitHandler,
  cancelHandler,
  categoryList }: IDeleteCategoryFormProps) => {

  const [checkedCategory, setCheckedCategory] = useState<string[]>([])

  const filteredCategoryList = categoryList.filter((category: ICategory) => category.categoryName !== 'To Do')

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const checked = (e.target as HTMLInputElement).name
    if (checkedCategory.includes(checked)) {
      setCheckedCategory(checkedCategory.filter((category) => category !== checked))
    } else {
      setCheckedCategory((prevCheckedCategory) => {
        return [...prevCheckedCategory, checked]
      })
    }
  }

  return (
    <div className={`delete-category-form-container ${active ? 'active' : ''}`}>
      <form className='delete-category-form'>
        {filteredCategoryList.length
          ?
          filteredCategoryList
            .map((category: ICategory, index: number) => {
              return <div className='checkbox-group' tabIndex={0} key={index}>
                <input
                  type='checkbox'
                  className='checkbox-input'
                  checked={checkedCategory.includes(category.categoryName)}
                  onChange={onChangeHandler}
                  name={category.categoryName}
                  id={category.categoryName} />
                <label className='radio-label' htmlFor={category.categoryName}>
                  <span className='ph-tick'></span>
                  {category.categoryName}
                </label>
              </div>
            })
          : <div>No category to delete</div>}

        <div className='form-button-container'>
          <button
            type='button'
            className='submit-button btn-color-doing'
            onClick={() => submitHandler(checkedCategory)}>
            Delete
          </button>
          <button
            type='button'
            className='cancel-button btn-color-doing'
            onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form >
    </div >
  )
}

export default DeleteCategoryForm
