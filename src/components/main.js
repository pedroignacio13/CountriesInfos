import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import MyContext from '../context'
import Form from './form'
import ListOfCountries from './listofcountries'
import BigCountry from './countrypage'

import '../styles/global.css'
import '../styles/paises.css'

function Main(){

    const {        
        loading,
        darkModeOn 
    } = useContext(MyContext)
    
    return(
        <main className={darkModeOn ? 'main dark-main' : 'main'}>

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