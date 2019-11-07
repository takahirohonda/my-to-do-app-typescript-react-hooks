import * as React from 'react'
import { useContext } from 'react'
import {
  UiContext
} from '../../AppContext'
import {
  IUiData
} from '../../types/models'



const Background = () => {
  const [uiData, setUiData] = useContext<[IUiData, any]>(UiContext)

  const clickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return {
        ...prevUiData,
        deleteAllMenu: false,
        deleteAllConfirm: false,
        backgroundDiv: false,
        listFlyout: false,
        addCategoryMenu: false,
        addCategory: false
      }
    })
  }

  return (
    <div
      className={`nav-menu-background ${uiData.backgroundDiv ? 'active' : ''}`}
      onClick={clickHandler}>
    </div>
  )
}

export default Background
