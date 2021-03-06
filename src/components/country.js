import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context'

import '../styles/country.css'
import '../styles/form.css'

function Country({ pais }){

  const { flag, name, population, region, capital, alpha2Code } = pais

  const {setMostrarInputs, darkModeOn} = useContext(MyContext)


  return(
    
    <>

        <Link className={darkModeOn === true ? 'card dark-card' : 'card'} to={`/${alpha2Code}`} onClick={() => setMostrarInputs(false)}>
        
            <img src={flag} alt={name}/>

            <section className={darkModeOn === true ? 'infos dark-infos' : 'infos'}>

                <h4> {name} </h4>

                <p>
                    <span className="topico">Population:</span> {population}
                </p>

                <p>
                    <span className="topico">Region:</span> {region}
                </p>

                <p>
                    <span className="topico">Capital:</span> {capital}
                </p>

            </section>
        
        </Link>

    </>
      
  )
}

export default Country;