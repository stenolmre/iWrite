import React, { useState, useRef } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { convertToHTML } from 'draft-convert'

import 'draft-js/dist/Draft.css'

const initialData = {
  blocks: [],
  entityMap: {},
}

const RichEditor = ({ action, dispatch }) => {
  const [inputData, setInputData] = useState('')
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(initialData))
  )

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const editor = useRef()

  const focus = () => editor.current.focus()
  const onChange = editorState => setEditorState(editorState)

  const submit = async () => {
    setProcessing(true)

    await action(dispatch, {
      name: inputData,
      text: convertToHTML(editorState.getCurrentContent())
    })

    setProcessing(false)
    setSuccess(true)
  }

  return <div>
    <label>Name</label>
    <input name="inputData" value={inputData} onChange={e => setInputData(e.target.value)}/>
    <label>Text</label>
    <Editor
      editorState={editorState}
      onChange={onChange}
      spellCheck={false}
      ref={editor}
    />
  <button disabled={processing} onClick={submit}>{processing ? 'Processing..' : 'Create'}</button>
    {
      success && <p>Success!</p>
    }
  </div>
}

export default RichEditor
