import React, { useEffect, useState, useRef } from 'react'

import { usePoemState, usePoemDispatch } from './../context/poem'
import { getPoems } from './../actions/poem'

import Loader from './loader'
import Poem from './poem'

const Poems = ({ search }) => {
  const { poems, loading } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => { getPoems(dispatchPoem) }, [dispatchPoem])

  const [divWidth, setDivWeight] = useState(1)
  const poemsDiv = useRef(null)

  useEffect(() => {
    setDivWeight(poemsDiv.current ? poemsDiv.current.offsetWidth : 1)

    const updateDivWidth = () => setDivWeight(poemsDiv.current ? poemsDiv.current.offsetWidth : 1)

    window.addEventListener("resize", updateDivWidth)
    return () => window.removeEventListener("resize", updateDivWidth)
  }, [poemsDiv.current])

  return <div className="poems" ref={poemsDiv}>
    {
      loading
        ? <Loader/>
        : poems && poems.filter(el => el.name.toLowerCase().includes(search.toLowerCase())).map(el => <Poem poem
          key={el._id}
          id={el._id}
          name={el.name}
          date={new Date(el.createdAt).toLocaleDateString()}
          text={el.text.replaceAll('<p></p>', '<br/>')}
          dispatchPoem={dispatchPoem}
          linkName={el.name.toLowerCase().replace(' ', '-')}
          likeCount={el.likes.length}
        />)
    }
  </div>
}

export default Poems
