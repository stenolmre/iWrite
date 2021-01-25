import React, { useState, useRef } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'

import 'draft-js/dist/Draft.css'

const initialData = {
  blocks: [],
  entityMap: {},
}

const RichEditor = ({ action, dispatch, id, html, name }) => {
  const [inputData, setInputData] = useState(name)
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromHTML(html))
  )

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const editor = useRef()

  const focus = () => editor.current.focus()
  const onChange = editorState => setEditorState(editorState)

  const submit = async () => {
    setProcessing(true)

    try {
      await action(dispatch, id, {
        name: inputData,
        text: convertToHTML(editorState.getCurrentContent())
      })

      setProcessing(false)
      setSuccess(true)
    } catch (err) {
      setProcessing(false)
      console.log(err.message)
    }
  }

  return <div>
    <label>Name</label>
    <input name="inputData" value={inputData} onChange={e => setInputData(e.target.value)}/>
    <Editor
      editorState={editorState}
      onChange={onChange}
      spellCheck={false}
      ref={editor}
    />
  <button disabled={processing} onClick={submit}>{processing ? 'Processing..' : 'Save'}</button>
    {
      success && <p>Success!</p>
    }
  </div>
}

export default RichEditor
