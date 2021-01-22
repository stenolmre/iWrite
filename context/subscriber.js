import React, { createContext, useContext, useReducer } from 'react'
import { initialState, SubscriberReducer } from './../reducers/subscriber'

export const SubscriberStateCtx = createContext()
export const SubscriberDispatchCtx = createContext()

export const useSubscriberState = () => {
  const context = useContext(SubscriberStateCtx);

  if (context === undefined) throw new Error('useSubscriberState must be used within SubscriberProvider');

  return context
}

export const useSubscriberDispatch = () => {
  const context = useContext(SubscriberDispatchCtx);

  if (context === undefined) throw new Error('useSubscriberDispatch must be used within SubscriberProvider');

  return context
}

const SubscriberProvider = ({ children }) => {
  const [subscribers, dispatch] = useReducer(SubscriberReducer, initialState)

  return <SubscriberStateCtx.Provider value={subscribers}>
    <SubscriberDispatchCtx.Provider value={dispatch}>
      { children }
    </SubscriberDispatchCtx.Provider>
  </SubscriberStateCtx.Provider>
}

export default SubscriberProvider
