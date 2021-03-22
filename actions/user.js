import axios from 'axios'
import setAuthToken from '@/utils/setauthtoken'
import { LOAD_USER, LOGIN_USER, LOGOUT_USER, USER_ERROR } from '@/actions/types'

export const loadUser = async (dispatch, token) => {
  setAuthToken(token)

  try {
    const { data } = await axios.get('/api/user/get')

    dispatch({
      type: LOAD_USER,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}

export async function login(dispatch, data, success) {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/user/login', body, config)

    dispatch({
      type: LOGIN_USER,
      payload: data
    })

    if (data.status === 'success') {
      success()
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}

export async function logout(dispatch, redirect) {
  try {
    dispatch({
      type: LOGOUT_USER
    })

    redirect()
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}
