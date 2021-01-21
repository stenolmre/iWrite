import React from 'react'

// import Background from './bg'
// import PhoneBackground from './bg_phone'
import Sidebar from './../components/sidebar'
import Footbar from './../components/footbar'
// import Tab from './../components/tab'

const Layout = ({ children, poem, sidebarpoem }) => {
  return <div className="index">
    {
      !poem && <Sidebar sidebarpoem={sidebarpoem}/>
    }
    <div>
      { children }
    </div>
    <Footbar />
  </div>
}

export default Layout
