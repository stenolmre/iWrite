import React, { useEffect } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'

import { useUserState, useUserDispatch } from './../../../context/user'
import { loadUser, logout } from './../../../actions/user'

import Layout from './../../../components/layout'
import AdminNavigation from './../../../components/adminnavigation'

const Dashboard = ({ user_token }) => {
  const router = useRouter()

  const { user } = useUserState()
  const dispatchUser = useUserDispatch()

  useEffect(() => { loadUser(dispatchUser, user_token) }, [dispatchUser, user_token])

  const logMeOut = async () => {
    await logout(dispatchUser, () => router.push('/'))
  }

  return <Layout>
    <AdminNavigation />
    <div className="admin_dashboard">
      <h2>Dashboard</h2>
      <p>{user && user.name}</p>
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
