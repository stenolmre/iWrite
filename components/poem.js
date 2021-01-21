import React, { useState } from 'react'
import Link from 'next/link'

import { addLike } from './../actions/poem'

const Poem = ({ id, name, date, text, poem, dispatchPoem }) => {
  const [showCopyMessage, setShowCopyMessage] = useState(false)

  const linkIsCopied = () => {
    setShowCopyMessage(true)

    setTimeout(() => {
      setShowCopyMessage(false)
    }, 4000)
  }

  const content = () => {
    return {__html: `${ text }`};
  }

  const like = () => {
    addLike(dispatchPoem, id, { like: true })
  }

  return <div className="poem">
    {
      poem
        ? <Link href={`/${id}?${name.toLowerCase().replace(' ', '-')}`}><a><h1>{ name }</h1></a></Link>
        : <h1>{ name }</h1>
    }
    <small>{ date }</small>
    {
      poem
        ? <Link href={`/${id}?${name.toLowerCase().replace(' ', '-')}`}><a>
            <div dangerouslySetInnerHTML={content()} className="poem-text"/>
          </a></Link>
        : <div dangerouslySetInnerHTML={content()} className="poem-text"/>
    }
    <div className="poem-social">
      <i className="far fa-heart" onClick={like}/>
      <i className="far fa-comment"/>
      <i className="fab fa-facebook-f"/>
      <i className="fas fa-link" onClick={linkIsCopied}/>
      {
        showCopyMessage && <span>Copied to clipboard</span>
      }
    </div>
  </div>
}

export default Poem
