import React, { createContext, useContext, useReducer } from 'react'
import { initialState, PoemReducer } from './../reducers/poem'

export const PoemStateCtx = createContext()
export const PoemDispatchCtx = createContext()

export const usePoemState = () => {
  const context = useContext(PoemStateCtx);

  if (context === undefined) throw new Error('usePoemState must be used within PoemProvider');

  return context
}

export const usePoemDispatch = () => {
  const context = useContext(PoemDispatchCtx);

  if (context === undefined) throw new Error('usePoemDispatch must be used within PoemProvider');

  return context
}

const PoemProvider = ({ children }) => {
  const [poems, dispatch] = useReducer(PoemReducer, initialState)

  return <PoemStateCtx.Provider value={poems}>
    <PoemDispatchCtx.Provider value={dispatch}>
      { children }
    </PoemDispatchCtx.Provider>
  </PoemStateCtx.Provider>
}

export default PoemProvider
