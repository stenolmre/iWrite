import React, { useState } from 'react'
import Head from '@/utils/head'

import validateEmail from '@/utils/validateemail'

import { useSubscriberState, useSubscriberDispatch } from '@/context/subscriber'
import { removeSubscriber } from '@/actions/subscriber'

import Layout from '@/components/layout'

const Subscribe = () => {
  const dispatchSubscriber = useSubscriberDispatch()

  const [email, setEmail] = useState('')
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState({ success: false, message: 'Success! You are removed from subscribers list.' })
  const [error, setError] = useState({ error: false, message: '' })

  const subscribe = async () => {
    if (!validateEmail(email)) {
      setError({ error: true, message: 'Please add valid email.' })
      return
    }

    try {
      setError({ error: false, message: '' })
      setProcessing(true)

      await removeSubscriber(dispatchSubscriber, { subscriber: email })

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
    <Head title="iWrite - Unsubscribe" url="https://www.iwrite.im/unsubscribe"/>
    <div className="subscribe">
      <h2>Unsubscribe</h2>
      <label>Email</label>
      <input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      {error.error && <p className="form_error">{error.message}</p>}
      <button disabled={processing} onClick={subscribe}>{processing ? 'Processing..' : 'Unsubscribe'}</button>
      {success.success && <p style={{ color: '#fff' }}>{success.message}</p>}
    </div>
  </Layout>
}

export default Subscribe
