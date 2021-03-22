import React, { useState } from 'react'

import validateEmail from './../utils/validateemail'

import { useSubscriberState, useSubscriberDispatch } from './../context/subscriber'
import { addSubscriber } from './../actions/subscriber'

const Sidebar = ({ sidebarpoem }) => {
  const dispatchSubscriber = useSubscriberDispatch()

  const [email, setEmail] = useState('')
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState({ success: false, message: 'Success! Thank You!' })
  const [error, setError] = useState({ error: false, message: '' })

  const subscribe = async () => {
    if (!validateEmail(email)) {
      setError({ error: true, message: 'Please add valid email.' })
      return
    }

    try {
      setError({ error: false, message: '' })
      setProcessing(true)

      await addSubscriber(dispatchSubscriber, { subscriber: email })

      setProcessing(false)
      setEmail('')

      setSuccess({ ...success, success: true })
    } catch (err) {
      setProcessing(false)
      setEmail('')

      setError({ error: true, message: 'Something went wrong! Please try again.' })
    }
  }

  return <div className="sidebar">
    <div className="sidebar_header">
      <h1>iWrite</h1>
      <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="author" />
    </div>
    <p>iWrite purpose is to offer you a flight across the space created in one's mind.</p>
    {
      sidebarpoem && <p>lifting a mask<br/>is a two man job<br/>help me from side<br/>and you could see<br/>a soul behind one</p>
    }
    <div className="sidebar_subscribe">
      <h4>Subscribe via email</h4>
      <input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <button disabled={processing} onClick={subscribe}>{processing ? 'Processing..' : 'Subscribe'}</button>
      {error.error && <p className="form_error">{error.message}</p>}
      {success.success && <p style={{ color: '#3A86FF' }}>{success.message}</p>}
    </div>
  </div>
}

export default Sidebar
