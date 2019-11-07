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
    task: 'Pay for my car registration',
    createdDate: new Date('2019-08-07'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Fix fly wire screen',
    createdDate: new Date('2020-09-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Do'
  },
  {
    task: 'Plant blueberry trees',
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
    task: 'Fly a helicopter',
    createdDate: new Date('1999-01-01'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Learn'
  },
  {
    task: 'Generate electricity from solar panel',
    createdDate: new Date('1999-03-04'),
    statusId: 0,
    status: 'To do',
    listName: 'Personal',
    categoryName: 'To Learn'
  }
]
