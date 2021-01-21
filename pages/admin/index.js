import React, { useState } from 'react'
import {Editor, EditorState} from 'draft-js'
import { convertToHTML } from 'draft-convert'

import { usePoemDispatch } from './../../context/poem'
import { addPoem } from './../../actions/poem'

import Layout from './../../components/layout'

const AddPost = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  // const content = () => {
  //   return {__html: `${convertToHTML(editorState.getCurrentContent())}`}
  // }

  return <Layout>
    <div className="admin">
      <Editor
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
    <button>Save</button>
  </Layout>
}

export default AddPost
