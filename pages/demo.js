import React from 'react'
import Cookies from 'js-cookie'

const MyComponent = () => {
  const initial = () => Cookies.set('arr', [])

  const add = () => {
    const arr = Cookies.get('arr') && JSON.parse(Cookies.get('arr'))

    Cookies.set('arr', [...arr, { name: 'Sten' }])
  }

  console.log(Cookies.get('arr') && JSON.parse(Cookies.get('arr')))

  return (
    <div style={{ color: 'white' }}>
      <p onClick={initial}>INITIAL</p>
      <p onClick={add}>ADD</p>
    </div>
  )
}

export default MyComponent
