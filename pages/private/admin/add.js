import React, { useEffect } from 'react'
import cookies from 'next-cookies'

// import { useUserState, useUserDispatch } from './../../../context/user'
// import { loadUser, logout } from './../../../actions/user'

import Layout from './../../../components/layout'
import AdminNavigation from './../../../components/adminnavigation'

const Add = ({ user_token }) => {
  return <Layout>
    <AdminNavigation />
    <div className="admin_add">
      <h2>Create</h2>
      <textarea />
      <button>Create</button>
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
