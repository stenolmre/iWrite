import React, { Fragment } from 'react'
// import GlobalState from './../context/context'
import './../css/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = ({ Component, pageProps }) => <Fragment>
  <Component {...pageProps} />
  <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Nerko+One&family=Montserrat:wght@400;500;600;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
  `}</style>
</Fragment>


export default App
