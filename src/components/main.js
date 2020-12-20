import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import MyContext from '../context'
import Form from './form'
import Country from './country'
import ListOfCountries from './listofcountries'
import BigCountry from './countrypage'

import '../styles/global.css'
import '../styles/paises.css'

function Main(){

    const {        
        countries,
        loading,
    } = useContext(MyContext)
    
    return(
        <main className="main">

            <Form />
            {
                !loading && <section className="paises">
                    {
                        <>
                            <Route exact path="/" children={<ListOfCountries />} />                                    
                                
                            <Route path='/:code' children={<BigCountry />} />
                        </>
                    }
                </section>
            }

        </main>
    )
}

export default Main;