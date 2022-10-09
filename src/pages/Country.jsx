import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const Country = () => {

    const { countryname } = useParams()
    const [countryData, setCountryData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    async function getCountryData(){
        setIsLoading(true)
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryname}`)
        const data = await response.json()
        setCountryData(data)
        setIsLoading(false)
        console.log(data)
    }

    useEffect(() => {
        getCountryData()
    },[])

  return (
    <div className='singleCountry'>
        
        <div className="link">
            <Link to={`/`}> <i class="ri-arrow-left-line"></i> <p>Back</p> </Link>
        </div>
        {isLoading ? 
        <>
            <LoadingSpinner />
        </>
        : 
        <>
            {countryData.map((country) => (
                <div className="countryInfo" key={country.name.common}>
                    <img src={country.flags.svg} alt="" />
                    <div>
                        <h2>{country.name.common}</h2>
                        <div className="countryDetails">
                            <div>
                                <h4>Region: {country.region}<span></span> </h4>
                                <h4>Sub Region: <span>{country.subregion}</span> </h4>
                                <h4>Capital: {country.capital}<span></span> </h4>
                            </div>
                            <div>
                                <h4>Top Level Domain: <span>{country.tld}</span></h4>
                                <h4>Currencies: <span></span> </h4>
                            </div>
                        </div>
                        <div className='borders'>
                            <h3>Borders:</h3>{country.borders && country.borders.map(border => (
                                <p>{border}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
        }
        
    </div>
  )
}

export default Country
{/*  */}
// {isLoading ? "" : "" }