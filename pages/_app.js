import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'

import PoemState from './../context/poem'

import './../css/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (Cookies.get('likes') === undefined) {
      Cookies.set('likes', [])
    }
  }, [])

  return <Fragment>
    <PoemState>
      <Component {...pageProps} />
    </PoemState>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Nerko+One&family=Montserrat:wght@400;500;600;700;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
    `}</style>
  </Fragment>
}


export default App
