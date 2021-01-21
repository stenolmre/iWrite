import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from './../components/layout'
import Loader from './../components/loader'
import Poem from './../components/poem'

import { usePoemState, usePoemDispatch } from './../context/poem'
import { getPoem } from './../actions/poem'

const MyComponent = () => {
  const { query } = useRouter()

  const { poem, loading } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => {
    getPoem(dispatchPoem, query.id)
  }, [dispatchPoem, query.id])

  return <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    </Head>
    <Layout>
      <div className="poems">
        {
          loading
            ? <Loader />
            : poem && <Poem key={poem._id} id={poem._id} name={poem.name} date={new Date(poem.createdAt).toLocaleDateString()} text={poem.text} dispatchPoem={dispatchPoem}/>
        }
      </div>
    </Layout>
  </Fragment>
}

export default MyComponent
