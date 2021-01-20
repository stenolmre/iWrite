import React from 'react'
import Background from './../components/bg'
import PhoneBackground from './../components/bg_phone'

const Index = () => {
  return <div className="index">
    <Background />
    <PhoneBackground />
  </div>
}

Index.getInitialProps = async ctx => {
  return {}
}

export default Index
