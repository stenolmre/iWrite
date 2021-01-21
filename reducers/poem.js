import { ADD_POEM, GET_POEM, GET_POEMS, POEM_ERROR, ADD_LIKE, ADD_COMMENT, REMOVE_LIKE, REMOVE_COMMENT } from './../actions/types'

export const initialState = {
  poem: null,
  poems: [],
  loading: true,
  error: null
}

export const PoemReducer = (state = initalState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_POEM:
    case GET_POEM:
      return {
        ...state,
        poem: payload,
        loading: false,
        error: null
      }
    case GET_POEMS:
      return {
        ...state,
        poems: payload,
        loading: false,
        error: null
      }
    case ADD_LIKE:
    case REMOVE_LIKE:
      return {
        ...state,
        poem: { ...state.poem, likes: payload },
        loading: false,
        error: null
      }
    case ADD_COMMENT:
    case REMOVE_COMMENT:
      return {
        ...state,
        poem: { ...state.poem, comments: payload },
        loading: false,
        error: null
      }
    case POEM_ERROR:
      return {
        ...state,
        poem: null,
        poems: [],
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
