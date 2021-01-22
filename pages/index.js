import React, { Fragment, useEffect, useState } from 'react'
import Head from './../utils/head'

import Layout from './../components/layout'
import Loader from './../components/loader'
import Poem from './../components/poem'

import { usePoemState, usePoemDispatch } from './../context/poem'
import { getPoems } from './../actions/poem'

const Index = () => {
  const { poems, loading } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => { getPoems(dispatchPoem) }, [dispatchPoem])

  const [search, setSearch] = useState('')

  return <Fragment>
    <Head title="iWrite" url="https://www.iwrite.im"/>
    <Layout sidebarpoem search={e => setSearch(e.target.value)}>
      <div className="poems">
        {
          loading && !poems
            ? <Loader/>
            : poems.filter(el => el.name.toLowerCase().includes(search.toLowerCase())).map(el => <Poem poem
              key={el._id}
              id={el._id}
              name={el.name}
              date={new Date(el.createdAt).toLocaleDateString()}
              text={el.text}
              dispatchPoem={dispatchPoem}
              linkName={el.name.toLowerCase().replace(' ', '-')}
            />)
        }
      </div>
    </Layout>
  </Fragment>
}

export default Index
