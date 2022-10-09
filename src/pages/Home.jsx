import {useState, useEffect} from 'react'
import CountryCardComponent from '../components/CountryCardComponent'
import LoadingSpinner from '../components/LoadingSpinner'

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    async function getCountries(){
        setIsLoading(true);
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        setCountries(data)
        if(data) setIsLoading(false)
    }

    useEffect(()=> {
        getCountries()
    },[])
    // console.log(querySearch)

  return (
    <>
        
        <div>
        {isLoading ? 
        <LoadingSpinner /> 
        : 
        <CountryCardComponent countries={countries}/>
        }
        </div>
    </>
    
  )
}

export default Home