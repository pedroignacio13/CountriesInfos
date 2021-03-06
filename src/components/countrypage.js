import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import MyContext from '../context'
import { BsArrowLeft } from 'react-icons/bs'

import '../styles/countrypage.css'
import '../styles/form.css'

function BigCountry(){

    const { code } = useParams()

    const [thisCountry, setThisCountry] = useState([])
    
    const {countries, darkModeOn, setMostrarInputs} = useContext(MyContext)

    useEffect(() => {
        setThisCountry(countries.filter((objPais) => objPais.alpha2Code === code))
    }, [code, countries])
        
    const settingFullBorders = (countries, borders) => {
        let fronteirasCompletas = []

        //iterando pelo array de borders
        for(let i = 0; i < borders.length; i++){
            //iterando pelo array de countries
            for(let j = 0; j < countries.length; j++){
                if(borders[i] === countries[j].alpha3Code){
                    fronteirasCompletas.push(countries[j].name)
                }
            }
        }
        return fronteirasCompletas
    }

    return(
      <>
        {
          thisCountry.length > 0 && thisCountry.map((obj) => {
                
            const { 
                flag, 
                name, 
                nativeName, 
                population, 
                region, 
                capital, 
                subregion, 
                topLevelDomain, 
                currencies, 
                languages, 
                alpha2Code, 
                borders } = obj

                const fullBordersNames = settingFullBorders(countries, borders)
                
                return (

                  <>

                    <div className="form">
                        <Link className={darkModeOn === true ? 'back dark-back' : 'back'} to='/' onClick={() => setMostrarInputs(true)}> <BsArrowLeft /> Back </Link>
                    </div>

                    <section className="bigcountry" key={alpha2Code}>

                      <img src={flag} alt={name} />

                       <div className={darkModeOn === true ? 'countryinfos dark-textinfos' : 'countryinfos'}>

                           <h2> {name} </h2>

                            {/* ESSA DIV ENGLOBA AS DUAS COLUNAS DE DADOS */}
                            <div className={darkModeOn === true ? 'textinfos dark-textinfos' : 'textinfos'}>

                                {/* ENGLOBA A PRIMEIRA COLUNA */}
                                <div className="firstinfos">
                                    <p>
                                        <span className="topico">Native Name: </span> {nativeName}
                                    </p>
                                    <p>
                                        <span className="topico">Population: </span> {population}
                                    </p>
                                    <p>
                                        <span className="topico"> Region: </span> {region}
                                    </p>
                                    <p>
                                        <span className="topico">Sub Region: </span> {subregion}
                                    </p>
                                    <p>
                                        <span className="topico">Capital: </span> {capital}
                                    </p>
                                </div>

                                {/* ENGLOBA A SEGUNDA COLUNA */}
                                <div className="otherinfos">
                                    <p>
                                        <span className="topico">Top Level Domain: </span> {topLevelDomain[0]}
                                    </p>
                                    <p>
                                        <span className="topico">Currencies: </span> {currencies.map((obj, index) => {
                                            if(index !== currencies.length - 1){
                                                return `${obj.name}, `
                                            }
                                            return  `${obj.name}.`
                                        })}
                                    </p>
                                    <p>
                                        <span className="topico">Languages: </span> {languages.map((obj, index) => {
                                            if(index !== languages.length - 1){
                                                return `${obj.name}, ` 
                                            }
                                            return `${obj.name}.`
                                        })}
                                    </p>
                                </div>

                            </div>

                            <div className="bordercountries">
                                <span className="topicoborder">
                                    Border Countries: {fullBordersNames.length === 0 ? <b>Sem Informações</b> : 
                                    fullBordersNames.map((arr, index) => {											
                                      return <span className={darkModeOn === true ? 'border dark-border' : 'border'} key={index}> {arr} </span>
                                    })
                                  }
                                </span>
                                
                            </div>
                                
                        </div>

                    </section>
                  </>
                )
            })
          }
      </>
            
    )
}

export default BigCountry;