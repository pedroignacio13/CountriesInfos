import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context'
/* import { GrSearch } from 'react-icons/gr' */
import { BsArrowLeft } from 'react-icons/bs'
/* import { RiArrowDropDownLine } from 'react-icons/ri' */

import Select, { components } from 'react-select';
import Tooltip from '@atlaskit/tooltip';

import '../styles/form.css'

function Form(){

    const {
        mostrarInputs, 
        setMostrarInputs, 
        regions,
        darkModeOn} = useContext(MyContext)

    return(
        //não está funcionando o filtro dos países
        <div className="form">

            {
                !mostrarInputs ? 
                <Link className={darkModeOn ? 'back dark-back' : 'back'} to='/' onClick={() => setMostrarInputs(true)}> <BsArrowLeft /> Back </Link>
                : 
                <Inputs regions={regions} />
            }

        </div>
    )
}

const Inputs = ({ regions }) => {

    const [country, setCountry] = useState('')

    const [optionFocused, setOptionFocused] = useState(false)

    const {
        setCountries,
        countriesBackup,
        darkModeOn} = useContext(MyContext)

    //FILTRO PARA AS REGIÕES DO DROPDOWN MENU
    function filtrarRegiao(continente){
        setCountries(countriesBackup.filter((obj) => obj.region === continente))
    }

    //DEVE VALIDAR O INPUT PARA VERIFICAR SE A PRIMEIRA LETRA É MAIÚSCULA
    function validaInput(input){
        setCountry(input)
    }
    
    useEffect(() => {
        function filtrarPais(pais){
            setCountries(() => {
                //A IDEIA É FAZER COM QUE A PRIMEIRA LETRA SEJA SEMPRE MAIUSCULA SEM QUE O USUARIO TENHA QUE COLOCÁ-LA MAIUSCULA
                return countriesBackup.filter((obj) => obj.name.startsWith(pais))
            })
        }

        filtrarPais(country)
    }, [country, countriesBackup, setCountries])

    //INDICATORSCONTAINER -> BOTÕES QUE FICAM À DIREITA DO INPUT
    //INDICATORSEPARATOR -> BARRINHA QUE FICA NO MEIO DOS BOTÕES
    //MENU -> É O COMPONENTE QUE ENGLOBA OS ITENS DAS OPÇÕES
    //OPTION -> COMPONENTE QUE RECEBE CADA OPÇÃO DO MENU
    //PLACEHOLDER -> PLACEHOLDER DO INPUT
    //SELECTCONTAINER -> CONTAINER QUE ENGLOBA O COMPONENTE INTEIRO
    //VALUECONTAINER -> CONTAINER QUE ENGLOBA A OPÇÃO ESCOLHIDA

    //A LETRA NO INPUT AINDA FICA PRETA QUANDO O DARKMODE ESTÁ ATIVO
    //PRECISO ESTILIZAR A SETINHA DO DROPDOWN MENU
    //A BORDA AINDA ESTÁ COM A COR PADRÃO
    
    const SelectContainer = ({ children, ...props }) => {
      return (
        <Tooltip delay={0}>
          <components.SelectContainer {...props}>
            {children}
          </components.SelectContainer>
        </Tooltip>
      )
    }
    const ValueContainer = ({ children, ...props }) => (
      <components.ValueContainer {...props}>{children}</components.ValueContainer>
    )
    const IndicatorsContainer = props => {
      return (
        <div>
          <components.IndicatorsContainer {...props} />
        </div>
      )
    }
    const Placeholder = props => {
      return <components.Placeholder {...props} />;
    }
    const SingleValue = ({ children, ...props }) => (
      <components.SingleValue {...props}>{children}</components.SingleValue>
    )    
    const MenuList = props => {
      return (
        <components.MenuList {...props}>
          {props.children}
        </components.MenuList>
      )
    }
    const Option = props => {
      return (
        <Tooltip truncateText>
          <components.Option {...props} />
        </Tooltip>
      )
    }

    return(
        <>
          <input 
            type="text" 
            placeholder='Search for a country...' 
            className={darkModeOn ? 'search dark-search' : 'search'}
            value={country}
            onChange={(e) => validaInput(e.target.value)}            
          />

          <Select 
            onChange={(e) => filtrarRegiao(e.value)} 
            placeholder={"Filter by region"}
            options={regions} 
            className={`${darkModeOn ? 'lista dark-lista' : 'lista'}`}                        
            components={{ SelectContainer, ValueContainer, IndicatorsContainer, Placeholder, SingleValue, MenuList, Option }}
            styles={{
              container: base => ({
                ...base,
                border: `${darkModeOn ? '0px' : '1px solid hsl(0%, 0%, 80%)'}`
              }),
              valueContainer: base => ({
                ...base,
                backgroundColor: `${darkModeOn ? 'hsl(209, 23%, 22%)' : 'initial'}`,
                width: 'calc(100% - 47px)',
                padding: '7px 0px 7px 10px',
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3
              }),
              placeholder: base => ({
                ...base,
                color: `${darkModeOn ? 'whitesmoke' : 'hsl(0,0%,80%)'}`
              }),
              indicatorsContainer: base => ({
                ...base,
                backgroundColor : `${darkModeOn ? 'hsl(209, 23%, 22%)' : 'initial'}`, 
                padding: '1px 0px',
                borderTopRightRadius: 3,
                borderBottomRightRadius: 3
              }),
              singleValue: base => ({
                ...base,
                color: `${darkModeOn ? 'whitesmoke' : 'initial'}`
              }),              
              menuList: base => ({
                ...base,
                backgroundColor: `${darkModeOn ? 'hsl(209, 23%, 22%)' : 'initial'}`,
                borderRadius: 3
              }),
              option: (provided, state) => {
                return { 
                  ...provided, 
                  color: `${darkModeOn ? 'whitesmoke' : 'hsl(0%, 0%, 80%)'}`
                }
              },
              control: (provided, state) => {
                return { 
                  ...provided, 
                  borderColor: `${darkModeOn ? 'hsl(209, 23%, 22%)' : 'lightgrey'}`,
                }
              }
            }}
          />            
                            
        </>
    )
}

export default Form;