import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import emailjs from 'emailjs-com'
import Head from './../utils/head'

import Layout from './../components/layout'

import validateEmail from './../utils/validateemail'

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [error, setError] = useState({ email: '', message: '', error: '' })
  const [success, setSuccess] = useState(false)
  const [processing, setProcessing] = useState(false)

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const send = async () => {
    setProcessing(true)

    try {
      if (!validateEmail(formData.email) && formData.message === '') {
        setError({ email: 'Please type a valid email.', message: 'Please type a message before sending.' })
        setProcessing(false)
        return
      }

      if (!validateEmail(formData.email)) {
        setError({ email: 'Please type a valid email.' })
        setProcessing(false)
        return
      }

      if (formData.message === '') {
        setError({ message: 'Please type a message before sending.' })
        setProcessing(false)
        return
      }

      setError({ email: '', message: '', error: '' })

      const templateParams = {
        client_email: formData.email,
        client_message: formData.message
      }

      await emailjs.send('gmail', 'iwrite', templateParams, 'user_d35Shv7J12m9DhmwjDmiA')

      setProcessing(false)
      setSuccess(true)
      setFormData({ email: '', message: '' })
    } catch (err) {
      setError({ error: 'Unfortunately something went wrong. Please try again.'})
      setProcessing(false)
    }
  }

  return <Fragment>
    <Head title="iWrite - Let's Talk" url="https://www.iwrite.im/letstalk"/>
    <Layout>
      <div className="contact">
        <h2>Let's Talk</h2>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={onChange}/>
        <p className="form_error">{error.email}</p>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={onChange}/>
        <p className="form_error">{error.message}</p>
        <button disabled={processing} onClick={send}>{processing ? 'Sending..' : 'Send'}</button>
        <p className="form_error">{error.error}</p>
        <p className="form_success">{success && 'Your message is successfully sent! Thank you!'}</p>
      </div>
    </Layout>
  </Fragment>
}

export default Contact
