# MTD - My To Do

To do app
- React 16.11
- TypeScript
- Context API
- Hooks
- IndexedDB
- PWA

Release to GooglePlay: [My To Do](https://play.google.com/store/apps/details?id=com.mdhmytodo.mdhmytodoapp)

## Get started

```bash
npm ci
npm start
```

# REFERENCE

## Refactoring local storage to IndexedDB

It is recommended to use IndexedDB to store data with PWA. Using IndexedDB requires a little bit more coding, but in the end the effort is worthwhile.

### Solution 1: Local storage to cache data

The solution is simple with local storage. In AppProvider, we can check if the certain item exists in the store and if it does, we get it from local storage. Otherwise, we populate the data with initial state.

we will refactor with local storage.

```jsx
const AppProvider = (props: IMovieProviderProps) => {
  const [listData, setListData] = useState<IList[]>(JSON.parse(localStorage.getItem('mtdListData')) || initialList)
  const [categoryData, setCategoryData] = useState<ICategory[]>(JSON.parse(localStorage.getItem('mtdCategoryData')) || initialCategories)

  useEffect(() => {
    localStorage.mtdListData = JSON.stringify(listData)
  }, [listData])
  useEffect(() => {
    localStorage.mtdCategoryData = JSON.stringify(categoryData)
  }, [categoryData])

  return (
    <ListContext.Provider value={[listData, setListData]}>
      <CategoryContext.Provider value={[categoryData, setCategoryData]}>
        {props.children}
      </CategoryContext.Provider>
    </ListContext.Provider>
  )
}
```

### Solution 2: Using IndexedDB

More coding is needed in order to use IndexedDB. API is not super friendly, either. The data fetch happens asynchronously as well as data update and database initialisation.

First the app loads the data with initial state, then fetch the data asynchronously from IndexedDB. If no database, it creates it and append data from initial state.

If data is in the database, update only happens when the state is not the same as the initial data. This prevents existing database to be overwritten with initial state when the app starts. When app starts, it loads data at first with the same data as initial states, then fetches data from IndexedDB asynchronously.

Main logic for IndexedDB operation is in src/helpers/IndexedDb.ts & src/helpers/InitialiseDb.ts.

initialiseDb() uses add method, which means no update happens when the same key exists. So, calling DB initialisation on componentDidMount will not cause the data to be overwritten by initial state.

```jsx
const AppProvider = (props: IMovieProviderProps) => {

  const [listData, setListData] = useState<IList[]>(initialList)
  const [categoryData, setCategoryData] = useState<ICategory[]>(initialCategories)

  useEffect(() => {
    // get initial data
    getDataForContextApi()
    .then((data) => {
      setListData(data[0])
      setCategoryData(data[1])
    })
  }, [])

  useEffect(() => {
    if (listData !== initialList) {
      upsertRecordToIndexedDb(listData, 'list')
    .then((data) => console.log('list updated: ', data, listData))
    }
  }, [listData])

  useEffect(() => {
    if (categoryData !== initialCategories) {
      upsertRecordToIndexedDb(categoryData, 'category')
    }
  }, [categoryData])

...

```





