import React, { Fragment, useEffect, useState, useRef } from 'react'

const Demo = () => {
  const div = useRef(null)

  const [num, setNum] = useState(0)
  const [line, setLine] = useState()

  useEffect(() => {
    const styles = getComputedStyle(div.current)

    const divHeight = div.current ? div.current.offsetHeight : 1
    const lineHeight = parseInt(styles.lineHeight)

    const lines = divHeight / lineHeight

    setNum(lines)
    setLine(lineHeight)
  }, [])

  console.log(line)

  return (<Fragment>
    <div ref={div}>
      <p>Something</p>
      <p>Else</p>
      <br />
      <p>Something</p>
      <p>Else</p>
    </div>
    <p>...</p>
    <br/>
    <div ref={div}>
      <p>Something</p>
      <p>Else</p>
      <br />
      <p>Something</p>
      <p>Else</p>
        <p>Something</p>
        <p>Else</p>
          <p>Something</p>
          <p>Else</p>
            <p>Something</p>
            <p>Else</p>
    </div>
    <p>...</p>
      <style jsx>
        {`
          div {
            height: ${line * 4}px;
            color: white;
            line-height: 1.5;
            background: red;
            overflow: hidden;
          }

          div p {
            margin: 0;
          }

          p {
            color: white;
            line-height: 1.5;
            margin: 0;
          }
        `}
      </style>
  </Fragment>)
}

export default Demo
