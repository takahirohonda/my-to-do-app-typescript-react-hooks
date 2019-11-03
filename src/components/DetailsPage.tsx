import * as React from 'react'
import { useContext } from 'react'
import DetailsMain from './details-page/DetailsMain'
import DeleteAllMenu from './forms/DeleteAllMenu'
import Background from './forms/Background'
import DeleteAllConfirmForm from './forms/DeleteAllConfirmForm'
import AddTaskForm from './forms/AddTaskForm'
import EditTaskForm from './forms/EditTaskForm'

const DetailsPage = () => {

  return (
    <React.Fragment>
      <Background />
      <DeleteAllMenu />
      <DeleteAllConfirmForm />
      <AddTaskForm />
      <EditTaskForm />
      <DetailsMain />
    </React.Fragment>
  )
}

export default DetailsPage
