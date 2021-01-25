import axios from 'axios'
import { ADD_POEM, GET_POEM, GET_POEMS, UPDATE_POEM, DELETE_POEM, POEM_ERROR, ADD_LIKE, ADD_COMMENT, REMOVE_LIKE, REMOVE_COMMENT } from './../actions/types'

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
    const { data } = await axios.get(`/api/poem/get?id=${id}`)

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
    const { data } = await axios.get('/api/poem/_get')

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

export const updatePoem = async (dispatch, id, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/poem/update?id=${id}`, body, config)

    dispatch({
      type: UPDATE_POEM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response
    })
  }
}

export const addLike = async (dispatch, id, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/poem/like?id=${id}`, body, config)

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

export const removeLike = async (dispatch, id) => {
  try {
    const { data } = await axios.put(`/api/poem/unlike?id=${id}`)

    dispatch({
      type: REMOVE_LIKE,
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

export const removeComment = async (dispatch, id, commentId) => {
  try {
    const { data } = await axios.put(`/api/poem/uncomment?id=${id}&commentId=${commentId}`)

    dispatch({
      type: REMOVE_COMMENT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}


export const deletePoem = async (dispatch, id) => {
  try {
    const { data } = await axios.delete(`/api/poem/delete?id=${id}`)

    dispatch({
      type: DELETE_POEM,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POEM_ERROR,
      payload: err.response.data.msg
    })
  }
}
