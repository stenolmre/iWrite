import React from 'react'
import Link from 'next/link'

const Footbar = () => {
  return <div className="footbar">
    <Link href="/"><a><i className="fas fa-th-large"/></a></Link>
    <Link href="/letstalk"><a><i className="fas fa-phone"/></a></Link>
  </div>
}

export default Footbar
