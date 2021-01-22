import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useLikeState, useLikeDispatch } from './../context/like'
import { addToLikes, removeFromLikes } from './../actions/like'
import { addLike, removeLike } from './../actions/poem'

import Comments from './comments'

const Poem = ({ id, name, date, text, poem, dispatchPoem }) => {
  const { query } = useRouter()

  const { likes } = useLikeState()
  const dispatchLike = useLikeDispatch()

  const [showCopyMessage, setShowCopyMessage] = useState(false)
  const [showComments, setShowComments] = useState(false)

  const linkIsCopied = () => {
    navigator.clipboard.writeText(`https://iwrite.vercel.app/${id}?${name.replace(' ', '-')}`)
    setShowCopyMessage(true)

    setTimeout(() => {
      setShowCopyMessage(false)
    }, 4000)
  }

  const content = () => {
    return {__html: `${ text }`};
  }

  const like = async () => {
    await addLike(dispatchPoem, id, { like: true })
    await addToLikes(dispatchLike, id)
  }

  const unlike = async () => {
    await removeLike(dispatchPoem, id)
    await removeFromLikes(dispatchLike, id)
  }

  return <div className="poem">
    {
      poem
        ? <Link href={`/${id}?${name.replace(' ', '-')}`}><a><h1>{ name }</h1></a></Link>
        : <h1>{ name }</h1>
    }
    <small>{ date }</small>
    {
      poem
        ? <Link href={`/${id}?${name.replace(' ', '-')}`}><a>
            <div dangerouslySetInnerHTML={content()} className="poem-text"/>
          </a></Link>
        : <div dangerouslySetInnerHTML={content()} className="poem-text"/>
    }
    <div className="poem-social">
      {
        likes && likes.includes(id)
          ? <i className="fas fa-heart" onClick={unlike}/>
          : <i className="far fa-heart" onClick={like}/>
      }
      {
        poem
          ? <Link href={`/${id}?c=true&${name.replace(' ', '-')}`}><a>
              <i className="far fa-comment" />
            </a></Link>
          : showComments || query.c
            ? <i className="fas fa-comment" onClick={() => setShowComments(!showComments)}/>
            : <i className="far fa-comment" onClick={() => setShowComments(!showComments)}/>
      }
      <a href={`https://www.facebook.com/sharer.php?u=https://iwrite.vercel.app/${id}?${name.replace(' ', '-')}`} data-width="300" data-height="400" target="_blank" rel="noreferrer noopener">
        <i className="fab fa-facebook-f"/>
      </a>
      <i className="fas fa-link" onClick={linkIsCopied}/>
      {
        showCopyMessage && <span>Copied to clipboard</span>
      }
    </div>
    {
      poem
        ? null
        : query.c
          ? <Fragment>
              <hr/>
              <Comments />
            </Fragment>
          : showComments && <Fragment>
              <hr/>
              <Comments />
            </Fragment>
    }
  </div>
}

export default Poem
