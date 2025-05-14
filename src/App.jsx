import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/Header/Header"
import HiddenText from "./components/HiddenText/HiddenText"
import QuotesList from "./components/QuotesList/QuotesList"
import QuoteDetail from "./components/QuoteDetail/QuoteDetail"

import { mockData } from "./data/mock-quotes"

const App = () => {
  const [heading, setHeading] = useState("Cita ilustres")
  const changeMessage = message => setHeading(message)
  // const [quotes, setQuotes] = useState(mockData)
  const [quotes, setQuotes] = useState([])
  
  return (
    <div className="App">
      <Header
        heading={heading}
        changeMessage={changeMessage}
      />

      <hr />

      <Routes>
        <Route path="/" element={ <HiddenText /> } />
        <Route path="quotes" element={ <QuotesList quotes={quotes} /> } />
        <Route path="quote/:id" element={ <QuoteDetail quotes={quotes} /> } />
        <Route path="*" element={ <p>Estos no son los androides que buscas</p> } />
      </Routes>
    </div>
  )
}

export default App
