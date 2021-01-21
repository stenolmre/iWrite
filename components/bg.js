import React from 'react'

const Background = () => {
  return <svg className="desktop_bg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <rect width="1440" height="1024" fill="url(#paint0_linear)"/>
      <g filter="url(#filter0_f)">
        <circle cx="434.338" cy="86.3382" r="442.831" transform="rotate(-34.7887 434.338 86.3382)" fill="url(#paint1_linear)"/>
      </g>
      <g filter="url(#filter1_f)">
        <circle cx="1134.61" cy="702.611" r="416.604" transform="rotate(-7.85178 1134.61 702.611)" fill="url(#paint2_linear)"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f" x="-282" y="-630" width="1432.68" height="1432.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
      </filter>
      <filter id="filter1_f" x="565" y="133" width="1139.22" height="1139.22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
      </filter>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="1037" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF2CDF"/>
        <stop offset="0.421875" stop-color="#7C20F0"/>
        <stop offset="1" stop-color="#0014FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="357.671" y1="-249.158" x2="610.98" y2="462.315" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF009C" stop-opacity="0.47"/>
        <stop offset="1" stop-color="#7C20F0" stop-opacity="0.4"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="1062.48" y1="386.984" x2="1300.79" y2="1056.32" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7C20F0" stop-opacity="0.6"/>
        <stop offset="1" stop-color="#0014FF" stop-opacity="0.4"/>
      </linearGradient>
      <clipPath id="clip0">
        <rect width="1440" height="1024" fill="white"/>
      </clipPath>
    </defs>
  </svg>
}

export default Background
