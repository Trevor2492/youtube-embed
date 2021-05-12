import React from 'react'
import { useState } from 'react'

const Search = ({ getQuery }) => {

  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
  }

  return (
    <div className='search'>
      <input 
        className='search-input' 
        placeholder='Youtube Embed code here'
        value={text}
        onChange={e => onChange(e.target.value)}
        onKeyPress={() => getQuery(text)}
      />
      <button 
        style={{ margin: 15 }}
        onClick={() => getQuery(text)}
      >
        Search
      </button>

    </div>
  )
}

export default Search
