import axios from 'axios'
import { ADD_POEM, GET_POEM, GET_POEMS, POEM_ERROR, ADD_LIKE, ADD_COMMENT, REMOVE_LIKE, REMOVE_COMMENT } from './../actions/types'

export const addPoem = async (dispatch, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/poem/add', body, config)

    dispatch({
      type: ADD_POEM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}

export const getPoem = async (dispatch, id) => {
  try {
    const { data } = await axios.post(`/api/poem/get?id=${id}`)

    dispatch({
      type: GET_POEM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}

export const getPoems = async (dispatch) => {
  try {
    const { data } = await axios.post('/api/poem/_get')

    dispatch({
      type: GET_POEMS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}

export const addLike = async (dispatch, id, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post(`/api/poem/like?id=${id}`, body, config)

    dispatch({
      type: ADD_LIKE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}

export const addComment = async (dispatch, id, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post(`/api/poem/comment?id=${id}`, body, config)

    dispatch({
      type: ADD_COMMENT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}
