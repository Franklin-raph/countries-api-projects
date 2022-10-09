import { useState, useEffect } from 'react'
// import moon

const Navbar = ({changemode, mode}) => {

    const [theme, setTheme] = useState(mode)
    useEffect(() => {
        setTheme(mode)
    },[])

    

  return (
    <div className='navbar'>
        <h2>Where in the world?</h2>
        <div onClick={()=> changemode()}>
            {mode === "homeDarkMode"? 
            <>
                <i className="ri-moon-fill"></i>
                <p>Dark Mode</p>
            </> 
            : 
            <>
                <i className="ri-sun-fill"></i>
                <p>Light Mode</p>
            </>
            }
            {/* <i className="ri-moon-fill"></i>
            <p>Dark mode</p> */}
            
        </div>
    </div>
  )
}

export default Navbar