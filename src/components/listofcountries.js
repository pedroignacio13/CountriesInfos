import React, { useContext } from 'react'
import MyContext from '../context'
import Country from './country'
import Erro from './error'

import '../styles/country.css'

function ListOfCountries(){
    const {countries} = useContext(MyContext)
    return(
        <>
            {
                countries.length === 0 ? <Erro /> : countries.map((pais) => {
                    return <Country pais={pais} key={pais.alpha2Code} />
                })
            }
        </>
    )
}

export default ListOfCountries;