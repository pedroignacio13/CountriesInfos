import React, { useContext } from 'react'
import MyContext from '../context'
import Country from './country'

import '../styles/country.css'

function ListOfCountries(){
    const {countries} = useContext(MyContext)
    //console.log(countries)
    return(
        countries.map((pais) => {
            return <Country pais={pais} key={pais.alpha2Code} />
        }) 
    )
}

export default ListOfCountries;