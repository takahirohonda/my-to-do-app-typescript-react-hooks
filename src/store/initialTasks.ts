import { ITask } from '../types/models'

export const initialTasks: ITask[] = [
  {
    task: 'Service lawn mower',
    createdDate: new Date('2000-01-03'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Go shopping',
    createdDate: new Date('2019-08-07'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Water the garden',
    createdDate: new Date('2020-09-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Walk do',
    createdDate: new Date('2020-06-04'),
    statusId: 1,
    status: 'Doing',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Pay electricity bill',
    createdDate: new Date('2020-01-05'),
    statusId: 2,
    status: 'Done',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Become a gym member',
    createdDate: new Date('2021-01-01'),
    statusId: 3,
    status: 'Backlog',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'React Hooks',
    createdDate: new Date('1999-01-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Learn'
  },
  {
    task: 'Vue.js',
    createdDate: new Date('1999-03-04'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Learn'
  }
]
