import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import Editor from '../components/Editor'
import Preview from '../components/Preview'

const defaultText = 'Lorem ipsum!\n\nExample: https://i.stack.imgur.com/XhsO9.png\n'

function IndexPage() {
  const [ text, setText ] = useState(defaultText)
  const onChange = function(event) {
    const value = event.target.value
    //console.info('value:', value);
    setText(value)
  }
  return (
    <div>
      <Head>
        <title>Image URL Viewer</title>
        <style>{`
          html, body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 14px;
          }
          a {
            color: blue;
          }
          a:hover {
            color: darkblue;
          }
        `}</style>
      </Head>

      <div className='row'>

        <div className='cell editor'>
          <Editor value={text} onChange={onChange} />
        </div>

        <div className='cell preview'>
          <Preview text={text} />
        </div>

      </div>

      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          height: 100vh;
        }

        .cell {
          flex: 1;
        }

        .editor {
        }

        .preview {
        }
      `}</style>

    </div>
  )
}

export default IndexPage
