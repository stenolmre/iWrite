import React, { Fragment, useEffect } from 'react'
import Head from './../utils/head'

import Layout from './../components/layout'
import Loader from './../components/loader'
import Poem from './../components/poem'

import { usePoemState, usePoemDispatch } from './../context/poem'
import { getPoems } from './../actions/poem'

const Index = () => {
  const { poems, loading } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => {
    getPoems(dispatchPoem)
  }, [dispatchPoem])

  return <Fragment>
    <Head title="iWrite" url="https://www.iwrite.im"/>
    <Layout sidebarpoem>
      <div className="poems">
        {
          loading
            ? <Loader />
            : poems && poems.map(el => <Poem poem key={el._id} id={el._id} name={el.name} date={new Date(el.createdAt).toLocaleDateString()} text={el.text} dispatchPoem={dispatchPoem} linkName={el.name.toLowerCase().replace(' ', '-')}/>)
        }
      </div>
    </Layout>
  </Fragment>
}

export default Index
