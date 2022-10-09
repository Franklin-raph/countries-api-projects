import React from 'react'

const SearchRegion = ({setRegionValue, getCountryByRegion}) => {
  return (
    <div className='selectRegion'>
        <select onChange={(e) => getCountryByRegion(e.target.value)} name="cars" id="cars">
            <option value="">Filter By Region</option>
            <option value="africa" onChange={() => getCountryByRegion()}>Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}

export default SearchRegion