import React, { Fragment, useEffect } from 'react'
import Head from './../../utils/head'
import { useRouter } from 'next/router'
import axios from 'axios'

import Layout from './../../components/layout'
import Loader from './../../components/loader'
import Poem from './../../components/poem'

import { usePoemState, usePoemDispatch } from './../../context/poem'
import { getPoem } from './../../actions/poem'

const PoemPage = ({ poem_name }) => {
  const { query } = useRouter()

  const { poem, loading } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  useEffect(() => {
    getPoem(dispatchPoem, query.id)
  }, [dispatchPoem, query.id])

  return <Fragment>
    <Head title={`iWrite - ${poem_name}`} url="https://www.iwrite.im/"/>
    <Layout>
      <div className="poems">
        {
          loading
            ? <Loader />
            : poem && <Poem key={poem._id} id={poem._id} name={poem.name} date={new Date(poem.createdAt).toLocaleDateString()} text={poem.text} dispatchPoem={dispatchPoem} linkName={poem_name.toLowerCase().replace(' ', '-')} poemData={poem}/>
        }
      </div>
    </Layout>
  </Fragment>
}

PoemPage.getInitialProps = async ctx => {
  const { id } = await ctx.query

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/poem/get?id=${ id }`)
    : await axios.get(`https://iwrite.im/api/poem/get?id=${ id }`)

  return { poem_name: data.name }
}

export default PoemPage
