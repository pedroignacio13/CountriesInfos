import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context'
import '../styles/navbar.css'
import { FiMoon } from 'react-icons/fi'

function Navbar(){

  const {setMostrarInputs, darkModeOn, setDarkModeOn} = useContext(MyContext)

  function darkMode(){
    setDarkModeOn(!darkModeOn)

    /* setDarkModeOn(!darkModeOn)
    localStorage.setItem("darkModeActive", darkModeOn) */
  }

  return(
    <nav className={darkModeOn === true ? 'nav dark-nav' : 'nav'}>

      <Link className={darkModeOn === true ? 'titulo dark-titulo' : 'titulo'} to='/' onClick={() => setMostrarInputs(true)}>Where in the world?</Link>

      <div className={darkModeOn === true ? 'darkmode dark-titulo' : 'darkmode'} onClick={() => darkMode()}>
        <FiMoon id='lua' style={{ fill : `${darkModeOn === true ? 'white' : null}` }} />
        <p>Dark Mode</p>
      </div>

    </nav>
  )
}

export default Navbar;