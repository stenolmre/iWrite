import React, { Fragment, useEffect } from 'react'
import Head from './../utils/head'
import axios from 'axios'

import Layout from './../components/layout'
import Loader from './../components/loader'
import Poem from './../components/poem'

import { usePoemDispatch } from './../context/poem'

const PoemPage = ({ poem }) => {
  const dispatchPoem = usePoemDispatch()

  return <Fragment>
    <Head title={`iWrite - ${poem.name}`} url="https://www.iwrite.im/"/>
    <Layout>
      <div className="poems">
        {
          !poem
            ? <Loader />
            : <Poem key={poem._id} id={poem._id} name={poem.name} date={new Date(poem.createdAt).toLocaleDateString()} text={poem.text} dispatchPoem={dispatchPoem} linkName={poem.name.toLowerCase().replace(' ', '-')}/>
        }
      </div>
    </Layout>
  </Fragment>
}

PoemPage.getInitialProps = async ctx => {
  const { id } = await ctx.query

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/poem/get?id=${ id }`)
    : await axios.get(`https://stenolmre.com/api/poem/get?id=${ id }`)

  return { poem: data }
}

export default PoemPage
