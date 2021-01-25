import React, { useEffect } from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'

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

  if (!user) {
    ctx.res.writeHead(302, { Location: '/private/admin/login' });
    ctx.res.end()
  } else {
    return { user_token: user }
  }
}

export default Index

// id={poem._id}
// name={poem.name}
// date={new Date(poem.createdAt).toLocaleDateString()}
// text={poem.text}
// dispatchPoem={dispatchPoem}
// linkName={poem.name.toLowerCase().replace(' ', '-')}
// poemData={poem}
// likeCount={poem.likes.length}
