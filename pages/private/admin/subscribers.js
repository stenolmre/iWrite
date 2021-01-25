import React, { Fragment,useEffect } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import Head from './../../../utils/head'
import axios from 'axios'

import setAuthToken from './../../../utils/setauthtoken'
import { useUserState, useUserDispatch } from './../../../context/user'
import { loadUser, logout } from './../../../actions/user'
import { useSubscriberState, useSubscriberDispatch } from './../../../context/subscriber'
import { getSubscribers } from './../../../actions/subscriber'

import Layout from './../../../components/layout'
import AdminNavigation from './../../../components/adminnavigation'

const Subscribers = ({ user_token }) => {
  const router = useRouter()

  const { user } = useUserState()
  const dispatchUser = useUserDispatch()
  const { subscribers } = useSubscriberState()
  const dispatchSubscriber = useSubscriberDispatch()

  useEffect(() => {
    loadUser(dispatchUser, user_token)
    getSubscribers(dispatchSubscriber)
  }, [dispatchUser, user_token, dispatchSubscriber])

  return <Layout>
    <Head title="Admin - Subscribers" url="https://www.iwrite.im/private/admin/subscribers"/>
    <AdminNavigation />
    <div className="admin_dashboard">
      <h2>Subscribers</h2>
      {
        subscribers && subscribers.map((el, i) => <div key={i} className={(i + 1) % 2 === 0 ? 'admin_subscribers even_nr' : 'admin_subscribers'}>
          <p>{i + 1}.</p>
          <p>{el.subscriber}</p>
        </div>)
      }
    </div>
  </Layout>
}

Subscribers.getInitialProps = async ctx => {
  const { user } = cookies(ctx) || ''

  setAuthToken(user)

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get('http://localhost:3000/api/user/get')
    : await axios.get('https://iwrite.im/api/user/get')

  if (data.status !== 'success') {
    ctx.res.writeHead(302, { Location: '/private/admin/login' });
    ctx.res.end()
  } else {
    return { user_token: user }
  }
}

export default Subscribers
