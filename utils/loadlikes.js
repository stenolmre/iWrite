import React, { Fragment, useEffect } from 'react'
import { useLikeDispatch } from './../context/like'
import { loadLikes } from './../actions/like'

const LoadLikes = ({ children }) => {
  const dispatchLike = useLikeDispatch()
  useEffect(() => { loadLikes(dispatchLike) }, [dispatchLike])

  return <Fragment>{ children }</Fragment>
}

export default LoadLikes
