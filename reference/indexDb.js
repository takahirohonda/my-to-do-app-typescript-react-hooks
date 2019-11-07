// (1) checking browser support

if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

// (2) opening indexDb connection
const dbPromise = indexedDB.open('mtd', 1);

// if 
dbPromise.onsuccess = (e) => {
  const database = e.target.result
  const transaction = db.transaction('mtd-store', 'readwrite');
  const objectStore= tx.objectStore('mtd-store');
  const getData = objectStore.get('data')
  console.log(getData)

}

