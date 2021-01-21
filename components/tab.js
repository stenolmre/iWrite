import React from 'react'
import Link from 'next/link'

const Tab = () => {
  return <div className="tab">
    <div>
      <Link href="/"><a>Posts</a></Link>
      <Link href="/letstalk"><a>Let's Talk</a></Link>
    </div>
    <div>
      <i className="fas fa-search"/>
      <input />
    </div>
  </div>
}

export default Tab
