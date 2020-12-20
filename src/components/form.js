import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context'
import { GrSearch } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

import '../styles/form.css'

function Form(){

    const {
        mostrarInputs, 
        setMostrarInputs, 
        regions,
        countries,
        paisString,
        setPaisString} = useContext(MyContext)

    return(
        //não está funcionando o filtro dos países
        <div className="form">

            {
                !mostrarInputs ? 
                <Link className='back' to='/' onClick={() => setMostrarInputs(true)}> <BsArrowLeft /> Back </Link>
                : 
                <Inputs regions={regions} />
            }

        </div>
    )
}

const Inputs = ({ regions }) => {

    const [country, setCountry] = useState('')

    const {
        countries,
        setCountries,
        countriesBackup} = useContext(MyContext)

        //FUNFA CERTIN
        function filtrarPais(pais){
            setCountries(countriesBackup.filter((obj) => obj.name.startsWith(pais)))
        }

        //NÃO CONSEGUI IMPLEMENTAR NO CLICK DO OPTION
        function filtrarRegiao(continente){
            setCountries(countriesBackup.filter((obj) => obj.region === continente))
        }
    
    useEffect(() => {
        filtrarPais(country)
    }, [country])

    return(
        <>
            <input 
             type="text" 
             placeholder='Search for a country...' 
             className='search'
             value={country}
             onChange={(e) => setCountry(e.target.value)}
             
            />

            <input list="regioes" className='lista'/>

            <datalist id='regioes' placeholder='Filter by Region' onClick={() => console.log('option clicado')}>

                { 
                    regions.length > 0 && regions.map((regiao, index) => {
                        return <option value={regiao} key={index}></option>
                    })
                }

            </datalist>
        </>
    )
}

export default Form;