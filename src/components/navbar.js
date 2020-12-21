import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MyContext from '../context'
import '../styles/navbar.css'
import { FiMoon } from 'react-icons/fi'

function Navbar(){

  const {mostrarInputs, setMostrarInputs, darkModeOn, setDarkModeOn} = useContext(MyContext)

  function darkMode(){
    setDarkModeOn(!darkModeOn)
  }

  return(
    <nav className={darkModeOn ? 'nav dark-nav' : 'nav'}>

      <Link className={darkModeOn ? 'titulo dark-titulo' : 'titulo'} to='/' onClick={() => setMostrarInputs(true)}>Where in the world?</Link>

      <div className={darkModeOn ? 'darkmode dark-titulo' : 'darkmode'} onClick={() => darkMode()}>
        <FiMoon style={{ fill : `${darkModeOn ? 'white' : null}` }} />
        <p>Dark Mode</p>
      </div>

    </nav>
  )
}

export default Navbar;