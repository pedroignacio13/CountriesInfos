import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MyContext from './context'
import Navbar from './components/navbar'
import Main from './components/main'

import './styles/global.css'

const url = 'https://restcountries.eu/rest/v2/'

function App() {
  /* useEffect(() => {
    if(localStorage.length === 0){
      localStorage.setItem("darkModeActive", "")
    }
  }, []) */
  /* FARÁ A CONDICIONAL NA RENDERIZAÇÃO DOS COMPONENTES NO MODO DARK */
  const [darkModeOn, setDarkModeOn] = useState(window.localStorage.getItem("darkModeActive") === "true" ? true : false)

  useEffect(() => {
    window.localStorage.setItem("darkModeActive", darkModeOn)
    //console.log(typeof window.localStorage.getItem("darkModeActive"))
  }, [darkModeOn])

  /* CONDICIONAL PARA RENDERIZAR O FORM E A LISTA */
  const [mostrarInputs, setMostrarInputs] = useState(true)

  /* STATE QUE ARMAZENA O ARRAY COM TODOS OS PAÍSES */
  const [countries, setCountries] = useState([])

  /* ARRAY QUE CONTÉM O REQUEST INICIAL DOS PAÍSES (USADO PARA AUXILIAR NO FILTRO DE PAÍSES) */
  const [countriesBackup, setCountriesBackup] = useState([])

  /* AUXILIO NA RENDERIZAÇÃO (NÃO SEI SE ESTÁ IMPLEMENTADO OU SE FUNCIONA) */
  const [loading, setLoading] = useState(true)

  /* ARRAY QUE ARMAZENA SOMENTE AS REGIÕES PARA O FILTRO */
  const [regions, setRegions] = useState([])

  /* FILTER FUNCTION FOR THE FILTER OF COUNTRIES */
  const filterRegions = (arr) => {

      let newRegions = arr.map((obj) => obj.region)
      newRegions = [...new Set(newRegions)]
      newRegions = newRegions.filter((regiao) => regiao !== "")
      let objarr = newRegions.map((regiao) => {
        return { "value" : regiao, "label" : regiao }
      })
      setRegions(objarr)
      
  }

  /* REALIZA O REQUEST */
  useEffect(() => {
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
        darkModeOn,
        setDarkModeOn
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
