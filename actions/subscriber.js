import axios from 'axios'
import { SUBSCRIBE, GET_SUBSCRIBERS, SUBSCRIBER_ERROR } from './types'

export const addSubscriber = async (dispatch, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/subscriber/add', body, config)

    dispatch({
      type: SUBSCRIBE,
      payload: data.subscriber
    })
  } catch (err) {
    dispatch({
      type: SUBSCRIBER_ERROR,
      payload: err.response.data.msg
    })
  }
}

export const getSubscribers = async (dispatch) => {
  try {
    const { data } = await axios.post('/api/subscriber/_get')

    dispatch({
      type: GET_SUBSCRIBERS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: SUBSCRIBER_ERROR,
      payload: err.response.data.msg
    })
  }
}
