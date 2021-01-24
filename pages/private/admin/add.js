import React from 'react'
import cookies from 'next-cookies'
import dynamic from 'next/dynamic'
const RichEditor = dynamic(() => import('./../../../components/editor'), { ssr: false })

import { usePoemDispatch } from './../../../context/poem'
import { addPoem } from './../../../actions/poem'

import Layout from './../../../components/layout'
import AdminNavigation from './../../../components/adminnavigation'

const Add = ({ user_token }) => {
  const dispatchPoem = usePoemDispatch()
  
  return <Layout>
    <AdminNavigation />
    <div className="admin_add">
      <h2>Create</h2>
      <RichEditor action={addPoem} dispatch={dispatchPoem}/>
    </div>
  </Layout>
}

Add.getInitialProps = async ctx => {
  const { user } = cookies(ctx) || ''

  if (!user) {
    ctx.res.writeHead(302, { Location: '/private/admin/login' });
    ctx.res.end()
  } else {
    return { user_token: user }
  }
}

export default Add
