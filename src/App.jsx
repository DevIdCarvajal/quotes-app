import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/Header/Header"
import HiddenText from "./components/HiddenText/HiddenText"
import QuotesList from "./components/QuotesList/QuotesList"
import QuoteDetail from "./components/QuoteDetail/QuoteDetail"

const mockData = [
  {
    text: "No por mucho madrugar te levantas más temprano",
    image: "https://2.bp.blogspot.com/-PeMOKsB0CbY/WVemAK8OrTI/AAAAAAAAT6U/TPhWJV_uloMb3siE9aKyoH07rhWmvN-XwCLcBGAs/s1600/Madrugar%2Bestres.jpg",
    author: "Escalope de Vega"
  },
  {
    text: "Al pan pan y al vino y luego se fue",
    image: "https://mundopan.es/wp-content/uploads/2015/03/pan-mundopan.jpg",
    author: "Juana de Ballesta"
  }
]

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