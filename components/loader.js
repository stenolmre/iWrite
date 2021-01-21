import React from 'react'

const Loader = () => {
  return <svg className="loader" width="28" height="28" stroke="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 140" preserveAspectRatio="xMidYMid meet" x="202" data-attributes-set=",xmlns,viewBox,preserveAspectRatio,x">
    <rect xmlns="http://www.w3.org/2000/svg" y="10" width="15" height="120" rx="6">
      <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
      <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
    </rect>
    <rect xmlns="http://www.w3.org/2000/svg" x="30" y="10" width="15" height="120" rx="6">
      <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
      <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
    </rect>
    <rect xmlns="http://www.w3.org/2000/svg" x="60" width="15" height="140" rx="6">
      <animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
      <animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
    </rect>
    <rect xmlns="http://www.w3.org/2000/svg" x="90" y="10" width="15" height="120" rx="6">
      <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
      <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
    </rect>
    <rect xmlns="http://www.w3.org/2000/svg" x="120" y="10" width="15" height="120" rx="6">
      <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
      <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
    </rect>
  </svg>
}

export default Loader
