import React from 'react'

const PhoneBackground = () => {
  return <svg className="bg_phone" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 414 736" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <rect width="414" height="736" fill="url(#paint0_linear)"/>
      <g filter="url(#filter0_f)">
        <circle cx="226.209" cy="599.209" r="200" transform="rotate(131.163 226.209 599.209)" fill="url(#paint1_linear)"/>
      </g>
      <g filter="url(#filter1_f)">
        <circle cx="308.751" cy="146.751" r="200" transform="rotate(23.8283 308.751 146.751)" fill="url(#paint2_linear)"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f" x="-156" y="217" width="764.417" height="764.417" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
      </filter>
      <filter id="filter1_f" x="-55" y="-217" width="727.503" height="727.503" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
      </filter>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="414" y2="736" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B06AB3"/>
        <stop offset="1" stopColor="#4568DC"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="226.209" y1="399.209" x2="226.209" y2="799.209" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B06AB3" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#4568DC" stopOpacity="0.2"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="308.751" y1="-53.2485" x2="308.751" y2="346.751" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B06AB3" stopOpacity="0.8"/>
        <stop offset="1" stopColor="#4568DC" stopOpacity="0.2"/>
      </linearGradient>
      <clipPath id="clip0">
        <rect width="414" height="736" fill="white"/>
      </clipPath>
    </defs>
  </svg>
}

export default PhoneBackground
