import React from 'react'
import { useState } from 'react'

const Search = ({ getQuery }) => {

  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <div className='search'>
      <input 
        className='search-input' 
        placeholder='Youtube Embed code here'
        value={text}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default Search
