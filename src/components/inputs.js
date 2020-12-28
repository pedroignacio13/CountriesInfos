import React, { useState, useContext, useEffect } from 'react'
import MyContext from '../context'

import Select, { components } from 'react-select';
import Tooltip from '@atlaskit/tooltip';

import '../styles/form.css'

const Regioes = ({ regions }) => {

    const {
        setCountries,
        countriesBackup,
        darkModeOn} = useContext(MyContext)

    //FILTRO PARA AS REGIÕES DO DROPDOWN MENU
    function filtrarRegiao(continente){
        setCountries(countriesBackup.filter((obj) => obj.region === continente))
    }

    //INDICATORSCONTAINER -> BOTÕES QUE FICAM À DIREITA DO INPUT
    //INDICATORSEPARATOR -> BARRINHA QUE FICA NO MEIO DOS BOTÕES
    //MENU -> É O COMPONENTE QUE ENGLOBA OS ITENS DAS OPÇÕES
    //OPTION -> COMPONENTE QUE RECEBE CADA OPÇÃO DO MENU
    //PLACEHOLDER -> PLACEHOLDER DO INPUT
    //SELECTCONTAINER -> CONTAINER QUE ENGLOBA O COMPONENTE INTEIRO
    //VALUECONTAINER -> CONTAINER QUE ENGLOBA A OPÇÃO ESCOLHIDA

    //A LETRA NO INPUT AINDA FICA PRETA QUANDO O DARKMODE ESTÁ ATIVO (FEITO)
    //PRECISO ESTILIZAR A SETINHA DO DROPDOWN MENU
    //A BORDA AINDA ESTÁ COM A COR PADRÃO (FEITO)
    
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
          <components.Option className={darkModeOn ? 'dark-option' : 'option'} {...props} />
        </Tooltip>
      )
    }

    return(
        <>
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
                height: 38.5,
                paddingLeft: '10px',
                borderTopLeftRadius: 2.5,
                borderBottomLeftRadius: 2.5
              }),
              placeholder: base => ({
                ...base,
                color: `${darkModeOn ? 'whitesmoke' : 'hsl(0,0%,80%)'}`
              }),
              indicatorsContainer: base => ({
                ...base,
                backgroundColor : `${darkModeOn ? 'hsl(209, 23%, 22%)' : 'initial'}`, 
                height: 38.5,
                borderTopRightRadius: 2.5,
                borderBottomRightRadius: 2.5
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

const PesquisaPais = () => {

  const [country, setCountry] = useState('')

  const {
    setCountries,
    countriesBackup,
    darkModeOn} = useContext(MyContext)

    useEffect(() => {
      function filtrarPais(pais){
          setCountries(() => {
              //A IDEIA É FAZER COM QUE A PRIMEIRA LETRA SEJA SEMPRE MAIUSCULA SEM QUE O USUARIO TENHA QUE COLOCÁ-LA MAIUSCULA
              return countriesBackup.filter((obj) => obj.name.startsWith(pais))
          })
      }

      filtrarPais(country)
  }, [country, countriesBackup, setCountries])

  //DEVE VALIDAR O INPUT PARA VERIFICAR SE A PRIMEIRA LETRA É MAIÚSCULA
  function validaInput(input){
    setCountry(input)
  }

  return (
    <input 
      type="text" 
      placeholder='Search for a country...' 
      className={darkModeOn ? 'search dark-search' : 'search'}
      value={country}
      onChange={(e) => validaInput(e.target.value)}            
    />
  )
}

export { Regioes, PesquisaPais }