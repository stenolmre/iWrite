import React, { useState } from 'react'

const Poem = () => {
  const [showCopyMessage, setShowCopyMessage] = useState(false)

  const linkIsCopied = () => {
    setShowCopyMessage(true)

    setTimeout(() => {
      setShowCopyMessage(false)
    }, 4000)
  }
  return <div className="poem">
    <h1>Exhausted</h1>
    <small>20.01.2021</small>
    <p>I’m tired of chasing the shadows. <br/>
      Please turn off the lights<br/>
      and hold me tight<br/>
      while we're sleeping in.</p>
    <div className="poem-social">
      <i className="far fa-heart"/>
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
