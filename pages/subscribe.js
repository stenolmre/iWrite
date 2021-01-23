import React, { useState } from 'react'

import validateEmail from './../utils/validateemail'

import { useSubscriberState, useSubscriberDispatch } from './../context/subscriber'
import { addSubscriber } from './../actions/subscriber'

import Layout from './../components/layout'

const Subscribe = () => {
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

  return <Layout>
    <div className="subscribe">
      <h2>Subscribe</h2>
      <label>Email</label>
      <input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <button disabled={processing} onClick={subscribe}>{processing ? 'Processing..' : 'Subscribe'}</button>
      {error.error && <p className="form_error">{error.message}</p>}
      {success.success && <p style={{ color: '#fff' }}>{success.message}</p>}
    </div>
  </Layout>
}

export default Subscribe
