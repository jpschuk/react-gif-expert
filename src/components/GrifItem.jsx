import React from 'react'

function GrifItem({url,title}) {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GrifItem