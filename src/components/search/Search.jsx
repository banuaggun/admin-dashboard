import React, {useState} from 'react'

const Search = ({search}) => {

  return (
    <>
      <div>
        <input type="search" placeholder="search..." value={search} />
      </div>
    </>
  )
}

export default Search