import * as React from 'react'
import { useContext } from 'react'
import {
  UiContext
} from '../../AppContext'
import {
  IUiData
} from '../../types/models'

const BackgroundTop = () => {
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const clickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        backgroundDivTop: false,
        backgroundDiv: true,
        addList: false,
        deleteListConfirm: false,
        allRequired: false
      }
    })
  }

  return <div
    className={`add-list-form-container-background ${uiData.backgroundDivTop ? 'active' : ''}`}
    onClick={clickHandler}></div>
}

export default BackgroundTop
