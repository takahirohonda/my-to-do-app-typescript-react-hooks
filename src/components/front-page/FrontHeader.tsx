import * as React from 'react'
import { useContext } from 'react'
import CategorySelect from './CategorySelect'
import CategoryEditMenu from './CategoryEditMenu'
import { IUiData } from '../../types/models'
import { UiContext } from '../../AppContext'


const FrontHeader = () => {

  const [ uiData, setUiData ] = useContext<[IUiData, any]>(UiContext)

  const burgerClickHandler = () => {
    setUiData((prevUiData: IUiData) => {
      return { ...prevUiData, backgroundDiv: true, listFlyout: true}
    })
  }

  const verticalDotsClickHandler = () => {
    setUiData((prevUiData: IUiData): IUiData => {
      return { ...prevUiData, backgroundDiv: true, addCategoryMenu: true }
    })
  }

  return (
    <>
    <CategoryEditMenu />
    <nav className='header-navigation'>
    <div className='header-left'>
      {/* <!-- Toggle Icon --> */}
      <div className='nav-burger-container' onClick={burgerClickHandler}>
        <span className='nav-burger-icon'></span>
        <span className='nav-burger-icon'></span>
        <span className='nav-burger-icon'></span>
      </div>
      {/* <!-- Category selector --> */}
      <CategorySelect />
    </div>
    <div className='header-right' onClick={verticalDotsClickHandler}>
      <span className='nav-dot'>&#8942;</span>
    </div>
  </nav>
  </>
  )
}

export default FrontHeader
