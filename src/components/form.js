import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context'
import { GrSearch } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

import Select from 'react-select';

import '../styles/form.css'

function Form(){

    const {
        mostrarInputs, 
        setMostrarInputs, 
        regions,
        countries} = useContext(MyContext)

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
        setCountries(() => {
            //A IDEIA É FAZER COM QUE A PRIMEIRA LETRA SEJA SEMPRE MAIUSCULA SEM QUE O USUARIO TENHA QUE COLOCÁ-LA MAIUSCULA
            return countriesBackup.filter((obj) => obj.name.startsWith(pais))
        })
    }

    //NÃO CONSEGUI IMPLEMENTAR NO CLICK DO OPTION
    function filtrarRegiao(continente){
        setCountries(countriesBackup.filter((obj) => obj.region === continente))
    }

    //DEVE VALIDAR O INPUT PARA VERIFICAR SE A PRIMEIRA LETRA É MAIÚSCULA
    function validaInput(input){
        setCountry(input)
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
             onChange={(e) => validaInput(e.target.value)}            
            />

            <Select onChange={(e) => filtrarRegiao(e.value)} placeholder="Filter by region" className="lista" options={regions} />
                            
        </>
    )
}

export default Form;