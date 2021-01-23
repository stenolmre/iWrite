import React, { Fragment, useState } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import Head from './../../../utils/head'

import validateEmail from './../../../utils/validateemail'
import { useUserDispatch } from './../../../context/user'
import { login } from './../../../actions/user'

import Layout from './../../../components/layout'

const Login = () => {
  const router = useRouter()

  const dispatchUser = useUserDispatch()

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [error, setError] = useState({ error: false, message: 'Invalid Credentials.' })

  const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

  const logMeIn = async () => {
    if (!validateEmail(loginData.email) || loginData.password === '') {
      setError({ ...error, error: true })
      return
    }

    try {
      await login(dispatchUser, loginData, () => router.push('/private/admin/dashboard'))
    } catch (err) {
      setError({ ...error, error: true })
    }
  }

  return <Fragment>
    <Head title="Admin Login"/>
    <Layout>
      <div className="admin_login">
        <h2>Log In</h2>
        <label>Email</label>
        <input name="email" value={loginData.email} onChange={onChange}/>
        <label>Password</label>
        <input type="password" name="password" value={loginData.password} onChange={onChange}/>
        <button onClick={logMeIn}>Log In</button>
        <p className="form_error">{error.error && error.message}</p>
      </div>
    </Layout>
  </Fragment>
}

Login.getInitialProps = async ctx => {
  const { user } = cookies(ctx) || ''

  if (user) {
    ctx.res.writeHead(302, { Location: '/private/admin/dashboard' });
    ctx.res.end()
  } else {
    return { user_token: user }
  }
}

export default Login
