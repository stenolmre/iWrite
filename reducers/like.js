import Cookies from 'js-cookie'
import { LOAD_LIKES, ADD_LIKE_ARR, REMOVE_LIKE_ARR } from './../actions/types'

export const initialState = {
  likes: []
}

export const LikeReducer = (state = initalState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOAD_LIKES:
      Cookies.get('likes') === undefined && Cookies.set('likes', [])

      const existingLikes = Cookies.get('likes') && JSON.parse(Cookies.get('likes'))
      return {
        likes: existingLikes
      }
    case ADD_LIKE_ARR:
      Cookies.set('likes', [...state.likes, payload])

      return {
        likes: [...state.likes, payload]
      }
    case REMOVE_LIKE_ARR:
      const remainedLikes = state.likes.filter(x => x !== payload)

      Cookies.set('likes', remainedLikes)
      return {
        likes: remainedLikes
      }
    default:
      return state
  }
}
