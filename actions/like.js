import { LOAD_LIKES, ADD_LIKE_ARR, REMOVE_LIKE_ARR } from './types'

export const loadLikes = async (dispatch) => {
  dispatch({
    type: LOAD_LIKES
  })
}

export const addToLikes = (dispatch, data) => {
  dispatch({
    type: ADD_LIKE_ARR,
    payload: data
  })
}

export const removeFromLikes = (dispatch, data) => {
  dispatch({
    type: REMOVE_LIKE_ARR,
    payload: data
  })
}
