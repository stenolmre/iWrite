import React, { useEffect } from 'react'
import cookies from 'next-cookies'
import Link from 'next/link'
import Head from '@/utils/head'
import axios from 'axios'

import setAuthToken from '@/utils/setauthtoken'
import { useUserDispatch } from '@/context/user'
import { loadUser } from '@/actions/user'
import { usePoemState, usePoemDispatch } from '@/context/poem'
import { getPoems, deletePoem } from '@/actions/poem'
import { useSubscriberState, useSubscriberDispatch } from '@/context/subscriber'
import { getSubscribers } from '@/actions/subscriber'

import Layout from '@/components/layout'
import AdminNavigation from '@/components/adminnavigation'

const Dashboard = ({ user_token }) => {
  const dispatchUser = useUserDispatch()
  const { poems } = usePoemState()
  const dispatchPoem = usePoemDispatch()
  const { subscribers } = useSubscriberState()
  const dispatchSubscriber = useSubscriberDispatch()

  useEffect(() => {
    loadUser(dispatchUser, user_token)
    getPoems(dispatchPoem)
    getSubscribers(dispatchSubscriber)
  }, [dispatchUser, user_token, dispatchPoem, dispatchSubscriber])

  const deleteOnePoem = async (id) => {
    await deletePoem(dispatchPoem, id)
  }

  return <Layout>
    <Head title="Admin Dashboard" url="https://www.iwrite.im/private/admin/dashboard"/>
    <AdminNavigation />
    <div className="admin_dashboard">
      <h2>Dashboard</h2>
      {
        poems && subscribers && <div className="admin_analytics">
          <div>{poems.length}<br/>poems</div>
          <div>{poems.map(el => el.likes.length).reduce((acc, item) => acc + item, 0)}<br/>likes</div>
          <div>{poems.map(el => el.comments.length).reduce((acc, item) => acc + item, 0)}<br/>comments</div>
          <div>{subscribers.length}<br/>subs.</div>
        </div>
      }
      <div className="admin_poems">
        <p className="admin_poems_nr">#</p>
        <Link href="/private/admin/dashboard"><a className="admin_poems_name">
          <p>Name</p>
        </a></Link>
        <p className="admin_poems_likes">L</p>
        <p className="admin_poems_comments">C</p>
        <i style={{ color: 'white' }} className="fas fa-trash"/>
      </div>
      <hr />
      {
        poems && poems.map((el, i) => <div key={i} className={(i + 1) % 2 === 0 ? 'admin_poems even_nr' : 'admin_poems'}>
          <p className="admin_poems_nr">{i + 1}</p>
          <Link href={`/private/admin/poem/${el._id}`}><a className="admin_poems_name">
            <p>{el.name}</p>
          </a></Link>
          <p className="admin_poems_likes">{el.likes.length}</p>
          <p className="admin_poems_comments">{el.comments.length}</p>
          <i style={{ cursor: 'pointer' }} className="fas fa-trash" onClick={() => deleteOnePoem(el._id)}/>
        </div>)
      }
    </div>
  </Layout>
}

Dashboard.getInitialProps = async ctx => {
  const { user } = cookies(ctx) || ''

  try {
    setAuthToken(user)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/user/get')
      : await axios.get('https://iwrite.im/api/user/get')

    return { user_token: user }
  } catch (err) {
    ctx.res.writeHead(302, { Location: '/private/admin/login' });
    ctx.res.end()
  }
}

export default Dashboard
