import { action } from '.'
import Axios from 'axios'

export const first = (payload) => ({
  type: action.FIRTS,
  payload
})

export const error = payload => ({
  type: action.ERROR,
  payload
})

export const getData = () => dispatch => {
  Axios.get('http://localhost:3004/first')
    .then(res => {
      if (res.statusText === 'OK') {
        dispatch(first(res.data)) // first it is action
      }
    })
    .catch(err => dispatch(error(err.message)))
      //error it is action
}
