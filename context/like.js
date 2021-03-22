import React, { createContext, useContext, useReducer } from 'react'
import { initialState, LikeReducer } from '@/reducers/like'

export const LikeStateCtx = createContext()
export const LikeDispatchCtx = createContext()

export const useLikeState = () => {
  const context = useContext(LikeStateCtx);

  if (context === undefined) throw new Error('useLikeState must be used within LikeProvider');

  return context
}

export const useLikeDispatch = () => {
  const context = useContext(LikeDispatchCtx);

  if (context === undefined) throw new Error('useLikeDispatch must be used within LikeProvider');

  return context
}

const LikeProvider = ({ children }) => {
  const [likes, dispatch] = useReducer(LikeReducer, initialState)

  return <LikeStateCtx.Provider value={likes}>
    <LikeDispatchCtx.Provider value={dispatch}>
      { children }
    </LikeDispatchCtx.Provider>
  </LikeStateCtx.Provider>
}

export default LikeProvider
