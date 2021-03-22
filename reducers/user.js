import Cookies from 'js-cookie'
import { LOAD_USER, LOGIN_USER, LOGOUT_USER, USER_ERROR } from '@/actions/types'

export const initialState = {
  user: null,
  isAdmin: false,
  loading: true,
  error: null
}

export const UserReducer = (state = initalState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        user: payload.user,
        isAdmin: payload.user.isAdmin,
        loading: false,
        error: null
      }
    case LOGIN_USER:
      Cookies.set('user', payload.token)

      return {
        ...state,
        user: payload.user,
        isAdmin: payload.user.isAdmin,
        loading: false,
        error: null
      }
    case LOGOUT_USER:
      Cookies.remove('user')

      return {
        ...state,
        user: null,
        isAdmin: false,
        loading: false,
        error: null
      }
    case USER_ERROR:
      return {
        ...state,
        user: null,
        isAdmin: false,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
