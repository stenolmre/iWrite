import React, { Fragment, useState } from 'react'
import Head from 'next/head'

import Layout from './../components/layout'

import validateEmail from './../utils/validateemail'

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [error, setError] = useState({ email: '', message: '', error: '' })

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const send = () => {
    try {
      if (!validateEmail(formData.email) && formData.message === '') {
        setError({ email: 'Please type a valid email.', message: 'Please type a message before sending.' })
        return
      }

      if (!validateEmail(formData.email)) {
        setError({ email: 'Please type a valid email.' })
        return
      }

      if (formData.message === '') {
        setError({ message: 'Please type a message before sending.' })
        return
      }

      setError({ email: '', message: '', error: '' })

      console.log(formData)
    } catch (err) {
      setError({ error: 'Unfortunately something went wrong. Please try again.'})
    }
  }

  return <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    </Head>
    <Layout>
      <div className="contact">
        <h2>Let's Talk</h2>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={onChange}/>
        <p className="form_error">{error.email}</p>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={onChange}/>
        <p className="form_error">{error.message}</p>
        <button onClick={send}>Send</button>
        <p>{error.error}</p>
      </div>
    </Layout>
  </Fragment>
}

export default Contact
