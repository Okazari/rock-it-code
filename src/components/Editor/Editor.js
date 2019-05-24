import React from "react"
import { UnControlled as CodeMirror } from "react-codemirror2"

const Editor = () => {
  const options = {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true
  }

  return (
    <CodeMirror
      value="console.log('Rock it Code 🎸')"
      options={options}
    />
  )
}

export default Editor
