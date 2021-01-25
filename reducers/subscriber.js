import { SUBSCRIBE, UNSUBSCRIBE, GET_SUBSCRIBERS, SUBSCRIBER_ERROR } from './../actions/types'

export const initialState = {
  subscribers: [],
  loading: true,
  error: null
}

export const SubscriberReducer = (state = initalState, action) => {
  const { type, payload } = action

  switch (type) {
    case SUBSCRIBE:
    case UNSUBSCRIBE:
    case GET_SUBSCRIBERS:
      return {
        ...state,
        subscribers: payload,
        loading: false,
        error: null
      }
    case SUBSCRIBER_ERROR:
      return {
        ...state,
        subscribers: [],
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
