import Axios from 'axios'

import { action } from '.'

// with redux-promise-midleware
export const getUsers = () => {
  return {
    type: 'TYPE',
    payload: Axios.get('http://localhost:3004/user')
  }
}

// return to start initialState
export const returnStart = () => ({
  type: action.THREE_RETURN_START
})
