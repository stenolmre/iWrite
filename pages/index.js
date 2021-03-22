import React, { Fragment, useState } from 'react'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Poems from '@/components/poems'

const Index = () => {
  const [search, setSearch] = useState('')

  return <Fragment>
    <Head title="iWrite" url="https://www.iwrite.im"/>
    <Layout sidebarpoem search={e => setSearch(e.target.value)}>
      <Poems search={search}/>
    </Layout>
  </Fragment>
}

export default Index
