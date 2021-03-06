import React from 'react'
import Head from 'next/head'

export default function MetaTags({ title, url }) {
  return <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    <meta name="description" content="iWrite purpose is to offer you a flight across the space created in one's mind."/>
    <meta name="image" content="https://res.cloudinary.com/djz69vbsq/image/upload/v1611424373/iWrite/share_img_uylypc.jpg"/>
    <meta name="keywords" content="Poetry, Novels, Toska, Feelings, Words"/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content="iWrite purpose is to offer you a flight across the space created in one's mind."/>
    <meta property="og:image" content="https://res.cloudinary.com/djz69vbsq/image/upload/v1611424373/iWrite/share_img_uylypc.jpg"/>
    <meta property="og:url" content={url}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content="iWrite purpose is to offer you a flight across the space created in one's mind."/>
    <meta name="twitter:image" content="https://res.cloudinary.com/djz69vbsq/image/upload/v1611424373/iWrite/share_img_uylypc.jpg"/>
    <meta name="twitter:card" content="summary_large_image"/>
  </Head>
}
