import React from 'react'
import dynamic from 'next/dynamic'
const RichEditor = dynamic(() => import('./edit'), { ssr: false })

const AdminPoem = ({ name, html, comments, deleteComment, dispatch, id, updatePoem }) => {
  return <div>
    <h2>Edit</h2>
    <RichEditor name={name} html={html} dispatch={dispatch} id={id} action={updatePoem}/>
    <hr />
    <h3>Comments</h3>
    {
      comments.map(el => <div key={el._id} className="admin_poem_comment">
        <hr/>
        <div>
          <p>{el.name}</p>
          <i className="fas fa-trash" onClick={async () => await deleteComment(dispatch, id, el._id)}/>
        </div>
        <p>{el.comment}</p>
      </div>)
    }
    {
      comments.length < 1 && <p>No Comments.</p>
    }
  </div>
}

export default AdminPoem
