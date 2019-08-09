import { action } from '../actions'

const initialState = {
 first: 1,
 error: null,
 data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case action.FIRTS:
    return { ...state, data: payload}

  case action.ERROR:
    return {
      ...state,
      error: payload
    }
  default:
    return state
  }
}
