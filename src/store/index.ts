import { createStore } from 'redux'
import reducer from './reducers'

const store = reducer && createStore(reducer)

export default store
