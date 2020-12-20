import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyContext from './context'
import Navbar from './components/navbar'
import Main from './components/main'

import './styles/global.css'

const url = 'https://restcountries.eu/rest/v2/'

function App() {
  /* CONDICIONAL PARA RENDERIZAR O FORM E A LISTA */
  const [mostrarInputs, setMostrarInputs] = useState(true)

  /* STATE QUE ARMAZENA O ARRAY COM TODOS OS PAÍSES */
  const [countries, setCountries] = useState([])

  const [countriesBackup, setCountriesBackup] = useState([])

  const [paisFiltrado, setPaisFiltrado] = useState([])

  /* AUXILIO NA RENDERIZAÇÃO (NÃO SEI SE ESTÁ IMPLEMENTADO OU SE FUNCIONA) */
  const [loading, setLoading] = useState(true)

  /* ARRAY QUE ARMAZENA SOMENTE AS REGIÕES PARA O FILTRO */
  const [regions, setRegions] = useState([])

  /* FETCH FUNCTION */
  const fetchCountries = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(() => {
          filterRegions(data)
          setCountriesBackup(data)
          return data
      })
      setLoading(false)
  }

  /* FILTER FUNCTION FOR THE FILTER OF COUNTRIES */
  const filterRegions = (arr) => {
      let newRegions = arr.map((obj) => obj.region)
      newRegions = [...new Set(newRegions)]
      newRegions = newRegions.filter((regiao) => regiao !== "")
      setRegions(newRegions)
  }

  /* REALIZA O REQUEST */
  useEffect(() => {
      fetchCountries()
  }, [])

  return (
    <MyContext.Provider
      value={{
        mostrarInputs,
        setMostrarInputs,
        countries,
        setCountries,
        loading,
        regions,
        countriesBackup,
        setCountriesBackup,
        paisFiltrado,
        setPaisFiltrado
      }}
    >

      <Router>

        <Navbar />

        <Main />

      </Router>
    </MyContext.Provider>
  );
}

export default App;
