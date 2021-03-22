import React, { Fragment } from 'react'

import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'
import Footbar from '@/components/footbar'

const Layout = ({ children, poem, sidebarpoem, search }) => {
  return <Fragment>
    <div className="index_desktop">
      <img className="index_desktop_img" src="/bg.jpg" alt="bg_image"/>
      {
        !poem && <Fragment>
          <div />
          <Sidebar sidebarpoem={sidebarpoem}/>
        </Fragment>
      }
      <div>
        <Navbar search={search}/>
        { children }
      </div>
      <Footbar />
    </div>
    <div className="index_mobile">
      <img className="index_desktop_img" src="/bg_mobile.jpg" alt="bg_image"/>
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
