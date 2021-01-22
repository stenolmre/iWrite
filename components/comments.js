import React, { useState } from 'react'

import { usePoemState, usePoemDispatch } from './../context/poem'
import { addComment } from './../actions/poem'

const Comments = () => {
  const { poem } = usePoemState()
  const dispatchPoem = usePoemDispatch()

  const [formData, setFormData] = useState({ name: '', comment: '' })
  const [error, setError] = useState({ error: false, message: 'Something went wrong, please try again.' })

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const comment = async () => {
    try {
      await addComment(dispatchPoem, poem._id, formData)
      setFormData({ name: '', comment: '' })
    } catch (err) {
      setError({ ...error, error: true })
    }
  }

  return <div className="poem_comments">
    <input name="name" value={formData.name} onChange={onChange} placeholder="name"/>
    <textarea name="comment" value={formData.comment} onChange={onChange} placeholder="comment"/>
    <button disabled={formData.name === '' || formData.comment === ''} onClick={comment}>Comment</button>
    {
      error.error && <p classsName="form_error">{error.message}</p>
    }
    <hr/>
    {
      poem && poem.comments && poem.comments.length > 0
        ? poem.comments.map(el => <p key={el._id} className="poem_comment">{el.comment}</p>)
        : <p>No comments.</p>
    }
  </div>
}

export default Comments
