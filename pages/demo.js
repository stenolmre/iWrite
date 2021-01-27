import React from 'react'

const Demo = () => {
  return <div>
    <img src="bg.jpg" alt="bg"/>
    <div className="div">
      <div className="div2"></div>
    </div>
    <style jsx>{`
      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: center;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }

      .div {
        width: 80%;
        min-height: 90vh;
        padding: 5vh 10%;
      }

      .div2 {
        width: 100%;
        height: 90vh;
        background: rgba(255, 255, 255, .1);
        backdrop-filter: blur(1rem);
        border-radius: 42px;
      }
    `}</style>
  </div>
}

export default Demo
