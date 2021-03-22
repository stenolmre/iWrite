import React from 'react'
import cookies from 'next-cookies'
import Head from '@/utils/head'
import axios from 'axios'

import setAuthToken from '@/utils/setauthtoken'
import { usePoemDispatch } from '@/context/poem'
import { addPoem } from '@/actions/poem'

import Layout from '@/components/layout'
import AdminNavigation from '@/components/adminnavigation'
import Analytics from '@/components/analytics'

const Add = ({ user_token }) => {
  const dispatchPoem = usePoemDispatch()

  return <Layout>
    <Head title="Admin - Add Poem" url="https://www.iwrite.im/private/admin/add"/>
    <AdminNavigation />
    <div className="analytics_page">
      <Analytics/>
    </div>
  </Layout>
}

Add.getInitialProps = async ctx => {
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

export default Add
