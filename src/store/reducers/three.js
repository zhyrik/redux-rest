import { action } from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  users: {
    data: []
  },
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'TYPE_PENDING': {
    return {
      ...state,
      fetching: true
    }
  }

  case 'TYPE_REJECTED':
    return { 
      ...state,
      fetching: false,
      error: payload
     }

  case 'TYPE_FULFILLED':
    return {
      ...state,
      fetching: false,
      fetched: true,
      users: payload
    }

  case action.THREE_RETURN_START:
    return {
      ...state,
      fetching: false,
      fetched: false,
      users: [],
      error: null
    }

  default:
    return state
  }
}
