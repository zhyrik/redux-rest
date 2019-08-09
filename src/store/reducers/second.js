import { action } from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case action.SECOND_START: {
    return {
      ...state,
      fetching: true
    }
  }

  case action.SECOND_ERROR:
    return { 
      ...state,
      fetching: false,
      error: payload
     }

  case action.SECOND_RECIVE:
    return {
      ...state,
      fetching: false,
      fetched: true,
      users: payload
    }

  case action.SECOND_RETURN_START:
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
