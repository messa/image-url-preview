import React from 'react'

function Editor({ value, onChange }) {
  return (
    <form>
      <textarea
        value={value}
        onChange={onChange}
      />

      <style jsx>{`
        form {
          height: 100%;
          display: flex;
        }

        textarea {
          flex: 1;
          font-size: 14px;
          font-family: 'Roboto Mono', monospace;
          resize: none;
        }
      `}</style>
    </form>
  )
}

export default Editor
