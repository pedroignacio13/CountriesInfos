import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import MyContext from '../context'
import ListOfCountries from './listofcountries'
import BigCountry from './countrypage'

import '../styles/global.css'
import '../styles/paises.css'

function Main(){

    const {        
        loading,
        darkModeOn ,
        countries
    } = useContext(MyContext)
    
    return(
        <main className={darkModeOn ? 'main dark-main' : 'main'} style={{ height: `${countries.length === 0 ? 'calc(100vh - 60px)' : 'fit-content'}` }} >

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