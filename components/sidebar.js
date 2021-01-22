import React from 'react'

const Sidebar = ({ sidebarpoem }) => {
  return <div className="sidebar">
    <div className="sidebar_header">
      <h1>iWrite</h1>
      <img src="/img.jpg" alt="author" />
    </div>
    <p>iWrite purpose is to offer you a flight across the space created in one's mind.</p>
    {
      sidebarpoem && <p>lifting a mask<br/>is a two man job<br/>help me from side<br/>and you could see<br/>a soul behind one</p>
    }
  </div>
}

export default Sidebar
