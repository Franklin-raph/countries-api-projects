import React from 'react'

const SearchCountry = ({setQuerySearch}) => {
  return (
    <div className='input'>
        <i className="ri-search-line"></i>
        <input placeholder='Search for a country' type="search" id="searchCountry" onChange={(e) => setQuerySearch(e.target.value)} />
    </div>
  )
}

export default SearchCountry