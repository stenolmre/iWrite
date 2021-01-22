import React, { Fragment } from 'react'

import GlobalState from './../context/state'
import LoadLikes from './../utils/loadlikes'

import './../css/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = ({ Component, pageProps }) => {
  return <Fragment>
    <GlobalState>
      <LoadLikes>
        <Component {...pageProps} />
      </LoadLikes>
    </GlobalState>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Nerko+One&family=Montserrat:wght@400;500;600;700;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
    `}</style>
  </Fragment>
}


export default App
