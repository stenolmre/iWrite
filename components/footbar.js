import React, { useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

import { useUserState, useUserDispatch } from './../context/user'
import { loadUser } from './../actions/user'

const Footbar = () => {
  const token = Cookies.get('user') || ''

  const { isAdmin } = useUserState()
  const dispatchUser = useUserDispatch()

  useEffect(() => { loadUser(dispatchUser, token) }, [dispatchUser, token])

  return <div className="footbar">
    <Link href="/"><a><i className="fas fa-th-large"/></a></Link>
    <Link href="/letstalk"><a><i className="fas fa-phone"/></a></Link>
    <Link href="/subscribe"><a><i className="fas fa-rss"/></a></Link>
    {
      isAdmin && <Link href="/private/admin/dashboard"><a><i className="fas fa-plus"/></a></Link>
    }
  </div>
}

export default Footbar
