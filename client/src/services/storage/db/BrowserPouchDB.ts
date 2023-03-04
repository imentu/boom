import PouchDB from 'pouchdb'
import FindPlugin from 'pouchdb-find'

PouchDB.plugin(FindPlugin)

export default PouchDB.defaults({})
