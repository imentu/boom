import { StorageService } from "./StorageService"

const IndexedPouchDB = PouchDB.defaults({ adapter: 'indexeddb' })
const storageService = new StorageService(new IndexedPouchDB('boom'))

export default storageService
