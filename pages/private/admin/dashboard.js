import React, { useEffect } from 'react'
import cookies from 'next-cookies'
import Link from 'next/link'

import { useUserDispatch } from './../../../context/user'
import { loadUser } from './../../../actions/user'
import { usePoemState, usePoemDispatch } from './../../../context/poem'
import { getPoems } from './../../../actions/poem'

import Layout from './../../../components/layout'
import AdminNavigation from './../../../components/adminnavigation'

const Dashboard = ({ user_token }) => {
  const dispatchUser = useUserDispatch()
  const { poems } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => {
    loadUser(dispatchUser, user_token)
    getPoems(dispatchPoem)
  }, [dispatchUser, user_token, dispatchPoem])

  return <Layout>
    <AdminNavigation />
    <div className="admin_dashboard">
      <h2>Dashboard</h2>
      {
        poems && poems.map((el, i) => <div key={i} className={(i + 1) % 2 === 0 ? 'admin_poems even_nr' : 'admin_poems'}>
          <p className="admin_poems_nr">{i + 1}</p>
          <Link href={`/private/admin/poem/${el._id}`}><a className="admin_poems_name">
            <p>{el.name}</p>
          </a></Link>
          <p className="admin_poems_likes">{el.likes.length}</p>
          <p className="admin_poems_comments">{el.comments.length}</p>
          <i className="fas fa-trash"/>
        </div>)
      }
    </div>
  </Layout>
}

Dashboard.getInitialProps = async ctx => {
  const { user } = cookies(ctx) || ''

  if (!user) {
    ctx.res.writeHead(302, { Location: '/private/admin/login' });
    ctx.res.end()
  } else {
    return { user_token: user }
  }
}

export default Dashboard
