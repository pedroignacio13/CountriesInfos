import React, { useContext } from 'react'
import MyContext from '../context'
import Country from './country'
import Erro from './error'

import '../styles/country.css'
import '../styles/form.css'

import { Regioes, PesquisaPais } from './inputs'

function ListOfCountries(){
    const {countries, regions} = useContext(MyContext)
    return(
        <>
        <div className="form">

            <PesquisaPais />

            <Regioes regions={regions} />

        </div>

            {
                countries.length === 0 ? <Erro /> : countries.map((pais) => {
                    return <Country pais={pais} key={pais.alpha2Code} />
                })
            }
        </>
    )
}

export default ListOfCountries;