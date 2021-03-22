import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUserDispatch } from '@/context/user'
import { logout } from '@/actions/user'

const AdminNavigation = ({ }) => {
  const router = useRouter()

  const dispatchUser = useUserDispatch()

  const logMeOut = async () => {
    await logout(dispatchUser, () => router.push('/'))
  }

  return <div className="admin_navbar">
    <Link href="/private/admin/dashboard"><a><i className="fas fa-th-large"/></a></Link>
    <Link href="/private/admin/add"><a><i className="fas fa-plus"/></a></Link>
    <Link href="/private/admin/subscribers"><a><i className="fas fa-rss"/></a></Link>
    <Link href="/private/admin/analytics"><a><i className="fas fa-chart-line"/></a></Link>
    <i className="fas fa-times" onClick={logMeOut} style={{ cursor: 'pointer' }}/>
  </div>
}

export default AdminNavigation
