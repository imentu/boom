import PouchDB from 'pouchdb'
import FindPlugin from 'pouchdb-find'
import MemoryAdapter from 'pouchdb-adapter-memory'

PouchDB.plugin(FindPlugin)
PouchDB.plugin(MemoryAdapter)

export default PouchDB.defaults({ adapter: 'memory' })
