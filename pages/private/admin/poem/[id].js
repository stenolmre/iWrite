import React, { useEffect } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import Head from './../../../../utils/head'
import axios from 'axios'

import setAuthToken from './../../../../utils/setauthtoken'
import { useUserDispatch } from './../../../../context/user'
import { loadUser } from './../../../../actions/user'
import { usePoemState, usePoemDispatch } from './../../../../context/poem'
import { getPoem, removeComment, updatePoem } from './../../../../actions/poem'

import Layout from './../../../../components/layout'
import AdminNavigation from './../../../../components/adminnavigation'
import AdminPoem from './../../../../components/adminpoem'

const Index = ({ user_token }) => {
  const { query } = useRouter()

  const dispatchUser = useUserDispatch()
  const { poem } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => {
    loadUser(dispatchUser, user_token)
    getPoem(dispatchPoem, query.id)
  }, [dispatchUser, user_token, dispatchPoem, query.id])

  return <Layout>
    <Head title="Admin - Edit Poem"/>
    <AdminNavigation />
    <div className="admin_poem">
      {
        poem && <AdminPoem
          name={poem.name}
          html={poem.text}
          comments={poem.comments}
          deleteComment={removeComment}
          dispatch={dispatchPoem}
          id={poem._id}
          updatePoem={updatePoem}
        />
      }
    </div>
  </Layout>
}

Index.getInitialProps = async ctx => {
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

export default Index
