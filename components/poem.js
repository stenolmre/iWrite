import React, { Fragment, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useLikeState, useLikeDispatch } from '@/context/like'
import { addToLikes, removeFromLikes } from '@/actions/like'
import { addLike, removeLike } from '@/actions/poem'

import Comments from '@/components/comments'

const Poem = ({ id, name, date, text, poem, dispatchPoem, linkName, poemData, likeCount }) => {
  const { query } = useRouter()

  const { likes } = useLikeState()
  const dispatchLike = useLikeDispatch()

  const [showCopyMessage, setShowCopyMessage] = useState(false)
  const [showComments, setShowComments] = useState(false)

  const linkIsCopied = () => {
    navigator.clipboard.writeText(`https://iwrite.im/poem/${id}?${linkName}`)
    setShowCopyMessage(true)

    setTimeout(() => {
      setShowCopyMessage(false)
    }, 2000)
  }

  const content = () => {
    return {__html: `${ text }`};
  }

  const like = async () => {
    try {
      await addLike(dispatchPoem, id, { like: true })
      await addToLikes(dispatchLike, id)
    } catch (err) {
      console.log(err)
    }
  }

  const unlike = async () => {
    try {
      await removeLike(dispatchPoem, id)
      await removeFromLikes(dispatchLike, id)
    } catch (err) {
      console.log(err)
    }
  }

  const poemDiv = useRef(null)
  const [numOfLines, setNumOfLines] = useState(0)
  const [poemLineHeight, setPoemLineHeight] = useState()

  useEffect(() => {
    const styles = getComputedStyle(poemDiv.current)

    const poemDivHeight = poemDiv.current ? poemDiv.current.offsetHeight : 1
    const poemDivLineHeight = parseInt(styles.lineHeight)

    const poemLines = poemDivHeight / poemDivLineHeight

    setNumOfLines(poemLines)
    setPoemLineHeight(poemDivLineHeight)
  }, [])


  return <div className="poem">
    {
      poem
        ? <Link href={`/poem/${id}?${linkName}`}><a><h1>{ name }</h1></a></Link>
        : <h1>{ name }</h1>
    }
    <small>{ date }</small>
    {
      poem
        ? <Link href={`/poem/${id}?${linkName}`}><a>
            <div dangerouslySetInnerHTML={content()} className="poem-text poem-text-short" ref={poemDiv}/>
            <p style={{ margin: '0 0 25px 0', lineHeight: '1.5', color: '#fff' }}>...</p>
          </a></Link>
        : <div dangerouslySetInnerHTML={content()} className="poem-text" ref={poemDiv}/>
    }
    <div className="poem_social">
      {
        likes && likes.includes(id)
          ? <i style={{ color: 'red' }} className="fas fa-heart" onClick={unlike}/>
          : <i className="far fa-heart" onClick={like}/>
      }
      {
        poem
          ? <Link href={`/poem/${id}?c=true&${linkName}`}><a>
              <i className="far fa-comment" />
            </a></Link>
          : showComments || query.c
            ? <i className="fas fa-comment" onClick={() => setShowComments(!showComments)}/>
            : <i className="far fa-comment" onClick={() => setShowComments(!showComments)}/>
      }
      <a href={`https://www.facebook.com/sharer.php?u=https://iwrite.im/poem/${id}?${linkName}`} data-width="300" data-height="400" target="_blank" rel="noreferrer noopener">
        <i className="fab fa-facebook-f"/>
      </a>
      <i className="fas fa-link" onClick={linkIsCopied}/>
      {
        showCopyMessage && <span style={{ fontSize: '.75rem' }}>Copied</span>
      }
    </div>
    {
      likeCount >= 0 && <p className="like_count">{likeCount} Likes</p>
    }
    {
      poem
        ? null
        : query.c
          ? <Fragment>
              <hr/>
              <Comments poem={poemData}/>
            </Fragment>
          : showComments && <Fragment>
              <hr/>
              <Comments poem={poemData}/>
            </Fragment>
    }
    <style jsx>{`
      .poem-text-short {
        height: ${poemLineHeight * 6 + 5}px;
      }

      .poem-text {
        line-height: 1.5;
        overflow: hidden;
        padding: 25px 0;
        font-weight: 400;
        color: #fff;
      }
    `}</style>
  </div>
}

export default Poem
