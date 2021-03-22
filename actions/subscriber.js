import axios from 'axios'
import { SUBSCRIBE, UNSUBSCRIBE, GET_SUBSCRIBERS, SUBSCRIBER_ERROR } from '@/actions/types'

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

export const removeSubscriber = async (dispatch, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/subscriber/delete', body, config)

    dispatch({
      type: UNSUBSCRIBE,
      payload: data
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
