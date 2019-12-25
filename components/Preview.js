import React from 'react'

const imageUrlRegex = /https?:[/][/][a-zA-Z0-9/._-]+/g

function Preview({ text }) {
  const textLines = text.split('\n')
  const lines = []
  for (const line of textLines) {
    if (line.length === 0) {
      // empty line would otherwise have zero height
      lines.push(<div className='line'>&nbsp;</div>)
      continue;
    }
    lines.push(<div className='line'>{line}</div>)
    const urls = line.match(imageUrlRegex)
    if (urls) {
      //lines.push(<pre>{JSON.stringify(urls)}</pre>)
      for (const url of urls) {
        lines.push(
          <div className='imagePreview'>
            <b><a href={url} target='_blank'>{url}</a></b><br />
            <img src={url} className='preview' />
          </div>
        )
      }
    }
  }
  return (
    <div className='Preview'>
      {lines}
      <style jsx>{`
        .Preview {
          overflow-y: scroll;
          font-family: 'Roboto Mono', monospace;
          padding: 8px 12px;
        }
        .Preview :global(.imagePreview) {
          font-family: Roboto, sans-serif;
          margin: 6px 0;
        }
        .Preview :global(img.preview) {
          max-width: 200px;
          max-height: 200px;
        }
      `}</style>

    </div>
  )
}

export default Preview
