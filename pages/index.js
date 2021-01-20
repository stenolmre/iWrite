import React from 'react'
import Background from './../components/bg'
import PhoneBackground from './../components/bg_phone'
import Poem from './../components/poem'

const Index = () => {
  return <div className="index">
    <Background />
    <PhoneBackground />
    <div className="content">
      <Poem />
      <Poem />
    </div>
  </div>
}

export default Index

// Index.getInitialProps = async ctx => {
//   return {}
// }
