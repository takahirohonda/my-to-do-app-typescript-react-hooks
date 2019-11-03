import * as React from 'react'
import { useContext, useEffect } from 'react'
import AppProvider from './AppProvider'
import FrontPage from './components/FrontPage'
import DetailsPage from './components/DetailsPage'
import { HashRouter as Router, Route } from 'react-router-dom'
import {
  mergeAllCategoriesByListName
} from './components/utils/mergeStateData'

import {
  IListData,
  ICurrentData
} from './types/models'

import {
  CurrentContext,
  DataContext
} from './AppContext'

import { createAllCategories } from './components/utils/createAllCategories'

const AppRouter = () => {
  const [ currentData, setCurrentData ] = useContext<[ICurrentData, any]>(CurrentContext)
  const [ appData, setAppData ] = useContext<[Array<IListData>, any]>(DataContext)

  // update all categories
  // update category data from select onChange event
  const updateAllCategories = () => {
    const allCategoriesDataForCurrentList = createAllCategories(appData, currentData.currentListName)
    setAppData((prevAppData: Array<IListData>) => {
      const newAppData = mergeAllCategoriesByListName(prevAppData, allCategoriesDataForCurrentList, currentData.currentListName)
      return newAppData
    })
  }

  updateAllCategories()
  console.log(appData)
  // this doesn't change the data on load...
  // useEffect(() => {
  //   updateAllCategories()
  //   console.log(appData)
  // })

  return (
    <>
      <Router>
        <Route exact path='/' component={FrontPage} />
        <Route exact path='/details' component={DetailsPage} />
      </Router>
    </>
  )
}

export default AppRouter
