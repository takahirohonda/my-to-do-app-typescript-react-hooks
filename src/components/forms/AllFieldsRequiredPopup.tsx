import * as React from 'react'
import { useContext } from 'react'
import { UiContext } from '../../AppContext'
import { IUiData } from '../../types/models'

const AllFieldsRequiredPopup = () => {

  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const onClickClose = () => {
    setUiData((prevUiData: IUiData): IUiData => {
      return { ...prevUiData, allRequired: false, backgroundDivTop: false, backgroundDiv: false }
    })
  }

  return (
    <div
      className={`alert-popup ${uiData.allRequired ? 'active' : ''}`} >
      <span className='close-cross' onClick={onClickClose}>X</span>
      <div className='alert-message-container'>
        <p className='alert-message'>All fields are required</p>
      </div>

    </div>
  )
}

export default AllFieldsRequiredPopup

