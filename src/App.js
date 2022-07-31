import './App.css';
import Query from "./components/Query"
import Countries from "./components/Countries"

import {useState, useEffect} from "react"

import axios from "axios"

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.includes(query))
  const showCountry = countries.filter(country => country.name.official === query)

  return (
    <>
      <Query onChange={handleQuery}/>
      <Countries countries={(showCountry.length === 1) ? showCountry : countriesToShow} setQuery={setQuery}/>
    </>
  )
}

export default App;
