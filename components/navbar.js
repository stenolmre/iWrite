import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = ({ search }) => {
  const { pathname } = useRouter()

  return <Fragment>
    <nav>
      <div>
        <Link href="/"><a className={pathname === '/' ? 'active_nav' : null}>Posts</a></Link>
        <Link href="/letstalk"><a className={pathname === '/letstalk' ? 'active_nav' : null}>Let's Talk</a></Link>
      </div>
      {
        search && <div className="navbar_search">
          <i className="fas fa-search"/>
          <input onChange={search} placeholder="Search poem.."/>
        </div>
      }
    </nav>
  </Fragment>
}

export default Navbar
