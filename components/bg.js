import React from 'react'

const Background = () => {
  return <svg className="desktop_bg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <rect width="1440" height="1024" fill="url(#paint0_linear)"/>
      <g filter="url(#filter0_f)">
        <circle cx="449" cy="472" r="361" fill="url(#paint1_linear)"/>
      </g>
      <g filter="url(#filter1_f)">
        <circle cx="1217.32" cy="685.302" r="534.504" transform="rotate(-165.95 1217.32 685.302)" fill="url(#paint2_linear)"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f" x="-12" y="11" width="922" height="922" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
      </filter>
      <filter id="filter1_f" x="469.047" y="-62.9715" width="1496.55" height="1496.55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
      </filter>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="1037" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B06AB3"/>
        <stop offset="1" stop-color="#4568DC"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="386.5" y1="198.5" x2="593" y2="778.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B06AB3" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#4568DC" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="1124.78" y1="280.352" x2="1430.53" y2="1139.11" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B06AB3" stop-opacity="0.6"/>
        <stop offset="1" stop-color="#4568DC" stop-opacity="0.4"/>
      </linearGradient>
      <clipPath id="clip0">
        <rect width="1440" height="1024" fill="white"/>
      </clipPath>
    </defs>
  </svg>
}

export default Background
