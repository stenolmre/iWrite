import React from 'react'
import cookies from 'next-cookies'
import Head from './../../../utils/head'
import dynamic from 'next/dynamic'
const RichEditor = dynamic(() => import('./../../../components/editor'), { ssr: false })
import axios from 'axios'

import setAuthToken from './../../../utils/setauthtoken'
import { usePoemDispatch } from './../../../context/poem'
import { addPoem } from './../../../actions/poem'

import Layout from './../../../components/layout'
import AdminNavigation from './../../../components/adminnavigation'

const Add = ({ user_token }) => {
  const dispatchPoem = usePoemDispatch()

  return <Layout>
    <Head title="Admin - Add Poem" url="https://www.iwrite.im/private/admin/add"/>
    <AdminNavigation />
    <div className="admin_add">
      <h2>Create</h2>
      <RichEditor action={addPoem} dispatch={dispatchPoem}/>
    </div>
  </Layout>
}

Add.getInitialProps = async ctx => {
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

export default Add
