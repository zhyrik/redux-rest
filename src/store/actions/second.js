import Axios from 'axios'

import { action } from '.'

export const handleError = (payload) => ({
  type: action.SECOND_ERROR,
  payload
})

export const start = () => ({
  type: action.SECOND_START
})

export const recive = (payload) => ({
  type: action.SECOND_RECIVE,
  payload
})

export const getUsers = () => dispatch => {
  dispatch(start())

  Axios.get('http://localhost:3004/user')
    .then(res => {
      if (res.statusText === 'OK') {
        dispatch(recive(res.data)) // first it is action
      }
    })
    .catch(err => dispatch(handleError(err.message)))
      // handleeError it is action
}

// return to start initialState
export const returnStart = () => ({
  type: action.SECOND_RETURN_START
})
