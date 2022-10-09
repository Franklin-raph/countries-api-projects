import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import SearchCountry from '../components/SearchCountry';
import SearchRegion from './SearchRegion';

const CountryCardComponent = ({countries}) => {
    const [querySearch, setQuerySearch] = useState("")
    const [regionValue, setRegionValue] = useState("")
    console.log(regionValue)

    async function getCountryByRegion(regionValue){
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionValue}`)
        const data = await res.json()
        console.log(data)

        // console.log(`https://restcountries.com/v3.1/region/${regionValue}`)
        // alert("fghjk")
    }

  return (
    <>
        <div className='searchAndSelect'>
            <SearchCountry setQuerySearch={setQuerySearch}/>
            <SearchRegion setRegionValue={setRegionValue} getCountryByRegion={getCountryByRegion}/>
        </div>

        {/* {!countries.filter(region => region.region.includes(regionValue))?  */}
            <div className='countryContainer'>
                { countries.filter(country => country.name.common.toLowerCase().includes(querySearch.toLowerCase()))
                .map((country) => {
                    return(

                    <Link to={`/country/${country.name.common}`} className='countryCard' key={country.name.common}>
                        <img src={country.flags.svg} alt="country flag" />
                        <div className="countryInfo">
                            <h3>{country.name.common}</h3>
                            <h4>Population: <span>{country.population}</span></h4>
                            <h4>Region: <span>{country.region}</span></h4>
                            <h4>Capital: <span>{country.capital}</span></h4>
                        </div>
                    </Link>
                    )
                    }
                )}
            </div>
        {/* :  */}
            {/* <div className='countryContainer'>
                { countries.filter(country => country.name.common.toLowerCase().includes(querySearch.toLowerCase()))
                .map((country) => {
                    return(

                    <Link to={`/country/${country.name.common}`} className='countryCard' key={country.name.common}>
                        <img src={country.flags.svg} alt="country flag" />
                        <div className="countryInfo">
                            <h3>{country.name.common}</h3>
                            <h4>Population: <span>{country.population}</span></h4>
                            <h4>Region: <span>{country.region}</span></h4>
                            <h4>Capital: <span>{country.capital}</span></h4>
                        </div>
                    </Link>
                    )
                    }
                )}
            </div> */}
        {/* } */}

        
{/* 
        <div className='countryContainer'>
            { countries.filter(country => country.name.common.toLowerCase().includes(querySearch.toLowerCase()))
            .map((country) => {
                return(

                <Link to={`/country/${country.name.common}`} className='countryCard' key={country.name.common}>
                    <img src={country.flags.svg} alt="country flag" />
                    <div className="countryInfo">
                        <h3>{country.name.common}</h3>
                        <h4>Population: <span>{country.population}</span></h4>
                        <h4>Region: <span>{country.region}</span></h4>
                        <h4>Capital: <span>{country.capital}</span></h4>
                    </div>
                </Link>
                )
                }
            )}
        </div> */}
    </>
  )
}

export default CountryCardComponent