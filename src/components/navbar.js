import React, { useContext, useReducer } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MyContext from '../context'
import '../styles/navbar.css'
import { FiMoon } from 'react-icons/fi'

function Navbar(){

    const {mostrarInputs, setMostrarInputs} = useContext(MyContext)

    return(
        <nav className='nav'>

            <Link className='titulo' to='/' onClick={() => setMostrarInputs(true)}>Where in the world?</Link>

            <div className="darkmode">
                <FiMoon />
                <p>Dark Mode</p>
            </div>

        </nav>
    )
}

export default Navbar;