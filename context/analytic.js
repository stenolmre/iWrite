import React, { createContext, useContext, useReducer } from 'react'
import { initialState, AnalyticReducer } from '@/reducers/analytic'

export const AnalyticStateCtx = createContext()
export const AnalyticDispatchCtx = createContext()

export const useAnalyticState = () => {
  const context = useContext(AnalyticStateCtx);

  if (context === undefined) throw new Error('useAnalyticState must be used within AnalyticProvider');

  return context
}

export const useAnalyticDispatch = () => {
  const context = useContext(AnalyticDispatchCtx);

  if (context === undefined) throw new Error('useAnalyticDispatch must be used within AnalyticProvider');

  return context
}

const AnalyticProvider = ({ children }) => {
  const [analytics, dispatch] = useReducer(AnalyticReducer, initialState)

  return <AnalyticStateCtx.Provider value={analytics}>
    <AnalyticDispatchCtx.Provider value={dispatch}>
      { children }
    </AnalyticDispatchCtx.Provider>
  </AnalyticStateCtx.Provider>
}

export default AnalyticProvider
