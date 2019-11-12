// Example pattern
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

var open = indexedDB.open('test', 1);
open.onupgradeneeded = e => {
  open.result.createObjectStore('s');
};
open.onsuccess = e => {
  let db = open.result;
  let tx = db.transaction('s', 'readwrite');
  let s = tx.objectStore('s');
  let rq = s.put('value', 'key');
  rq.onsuccess = e => alert('succeeded');
  rq.onerror = e => alert(e.message);
  tx.oncomplete = e => alert('committed');
  tx.onabort = e => alert(e.message);
};

/////////////////////////////////////////////
// (2) Pattern for my to do /////////////////
/////////////////////////////////////////////

const exampleData = [
  {data: [{categoryName: 'To do', listName: 'Personal'},
    {categoryName: 'To do', listName: 'Work'}]},
  {data: [{listName: 'Personal'}, {listName: 'Work'}]}
]

const key = ['category', 'list']

let db
let request = indexedDB.open('mtd', 1);

request.onupgradeneeded = e => {
  db = e.target.result
  const store = db.createObjectStore('mtd-data')
  console.log('created store: ', store)
  // const store = db.createObjectStore('mtd-data',
  // {keyPath: 'key', autoIncrement: true});
  // store.createIndex('context', 'context', { unique: true })
  // store.createIndex('data', 'data', { unique: false })
}

request.onsuccess = e => {
  db = e.target.result;
  console.log('opened indexedDb...', db)
  if (!db.objectStoreNames.contains('mtd-data')) {
    const transaction = db.transaction(["mtd-data"], 'readwrite')
    const store = transaction.objectStore('mtd-data')
    exampleData.forEach((data, index) => {
      store.put(data, key[index])
      console.log('Upserted data: ', data)
    })
    db.close()
  }
  else {
    console.log('mtd-data store already exists')
  }
}
request.onerror = e => {
  console.error('Failed to open db: ', e.target.error)
}

// reopen index db
request = indexedDB.open('mtd', 1)

request.onsuccess = e => {
  db = e.target.result
  const transaction = db.transaction(["mtd-data"], 'readonly')
  const store = transaction.objectStore('mtd-data')
  const categoryData = store.get('category')
  categoryData.onsuccess= e => {
    console.log('category data retrived: ', e.target.result.data)
  }
  const listData = store.get('list')
  listData.onsuccess = e => {
    console.log('listData retrieved: ', e.target.result.data)
  }
  db.close()
}

request.onerror = e => {
  console.error('Failed to open db second time: ', e.target.error)
}