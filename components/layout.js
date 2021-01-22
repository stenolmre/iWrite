import React, { Fragment } from 'react'

// import Background from './bg'
// import PhoneBackground from './bg_phone'
import Sidebar from './../components/sidebar'
import Navbar from './../components/navbar'
import Footbar from './../components/footbar'
// import Tab from './../components/tab'

const Layout = ({ children, poem, sidebarpoem, search }) => {
  return <Fragment>
    <div className="index_desktop">
      {
        !poem && <Sidebar sidebarpoem={sidebarpoem}/>
      }
      <div>
        <Navbar search={search}/>
        { children }
      </div>
      <Footbar />
    </div>
    <div className="index_mobile">
      {
        !poem && <Sidebar sidebarpoem={sidebarpoem}/>
      }
      <div>
        { children }
      </div>
      <Footbar />
    </div>
  </Fragment>
}

export default Layout
