import { combineReducers } from 'redux'

import first from './first'
import second from './second'
import three from './three'

export default  combineReducers({
  first,
  second,
  three
})