let db: any

export const checkIndexDbBrowserSupport = (): boolean => {
  return 'indexedDB' in window
}

export const initialiseDb = (data: any, key: string[]) => {
  // let db
  const request = indexedDB.open('mtd', 1)

  return new Promise((resolve, reject) => {
    request.onupgradeneeded = (e: any) => {
      db = e.target.result
      const store = db.createObjectStore('mtd-data')
      // console.log('created store: ', store)
    }

    request.onsuccess = (e: any) => {
      db = e.target.result
      // console.log('opened indexedDb to initialise...', db)
      if (db.objectStoreNames.contains('mtd-data')) {

        const transaction = db.transaction(['mtd-data'], 'readwrite')
        const store = transaction.objectStore('mtd-data')

        data.forEach((data: any, index: number) => {
          const check = store.add(data, key[index])
          // console.log('Adding data: ', data)
        })
        db.close()
        resolve(true)
      }
      else {
        // console.log('mtd-data store already exists')
        resolve(true)
      }
    }
    request.onerror = (e: any) => {
      // console.error('Failed to open db: ', e.target.error)
      reject(e.target.error)
    }
  })
}

const getReadOnlyStore = () => {
  // let db: any
  const request = indexedDB.open('mtd', 1)
  return new Promise((resolve, reject) => {
    request.onsuccess = (e: any) => {
      db = e.target.result
      const transaction = db.transaction('mtd-data', 'readonly')
      const store = transaction.objectStore('mtd-data')
      resolve(store)
    }
    request.onerror = (e: any) => {
      console.error('Failed to open db second time: ', e.target.error)
      reject(e.target.error)
    }
  })
}

export const getDataFromIndexedDb = async (key: string) => {
  try {
    const store: any = await getReadOnlyStore()
    // console.log('store is ready to getDataFromIndexedDb')
    const categoryData = store.get(key)
    return new Promise((resolve, reject) => {
      categoryData.onsuccess = (e: any) => {
        // console.log('category data retrived: ', e.target.result)
        resolve(e.target.result)
        db.close()
      }
      categoryData.onerror = (e: any) => {
        reject(e.target.error)
        console.error('data retrieval error: ', e.target.error)
      }
    })
  } catch (e) {
    console.error('error in getReadOnlySore(): ', e)
  }
}

export const upsertRecordToIndexedDb = (data: any, key: string) => {
  let db
  const request = indexedDB.open('mtd', 1)

  return new Promise((resolve, reject) => {

    request.onsuccess = (e: any) => {
      db = e.target.result
      // console.log('opened indexedDb to upsert...', db)
      if (db.objectStoreNames.contains('mtd-data')) {
        const transaction = db.transaction('mtd-data', 'readwrite')
        const store = transaction.objectStore('mtd-data')
        store.put(data, key)
        // console.log('Upserted data: ', data)

        db.close()
        resolve(true)
      }
      else {
        // console.log('mtd-data store already exists')
        resolve(true)
      }
    }
    request.onerror = (e: any) => {
      console.error('Failed to open db: ', e.target.error)
      reject(e.target.error)
    }
  })
}

export const clearIndexedDB = (): Promise<boolean> => {
  const req = indexedDB.deleteDatabase('mtd')
  return new Promise((resolve, reject) => {
    req.onsuccess = () => {
      resolve(true)
    }
    req.onerror = () => {
      resolve(false)
    }
    req.onblocked = () => {
      resolve(false)
    }
  })
}
