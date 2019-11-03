import { ITask } from '../types/models'

export const initialTasks: ITask[] = [
  {
    task: 'Service lawn mower',
    createdDate: new Date('1009-00-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Go shopping',
    createdDate: new Date('1009-00-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Water the garden',
    createdDate: new Date('1010-03-00'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Walk do',
    createdDate: new Date('1009-00-09'),
    statusId: 1,
    status: 'Doing',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Pay electricity bill',
    createdDate: new Date('1009-02-09'),
    statusId: 2,
    status: 'Done',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Become a gym member',
    createdDate: new Date('1010-02-09'),
    statusId: 3,
    status: 'Backlog',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'React Hooks',
    createdDate: new Date('1009-00-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Learn'
  },
  {
    task: 'Vue.js',
    createdDate: new Date('1009-00-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Learn'
  }
]
