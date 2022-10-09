import './App.css'
import Home from './pages/Home'
import Country from './pages/Country'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState("homeDarkMode")

  function changemode(){

    if(mode === 'homeDarkMode'){
      setMode('homeLightMode')
    }else{
      setMode('homeDarkMode')
    }
    return mode
  }

  return (
    <BrowserRouter>
      <div className={mode}>
        <Navbar changemode={changemode} mode={mode}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/country/:countryname' element={<Country />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
