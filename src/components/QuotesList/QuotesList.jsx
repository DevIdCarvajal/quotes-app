import { useEffect, useState } from "react"
import Quote from "../Quote/Quote"
import PropTypes from "prop-types"

const QuotesList = ({quotes}) => {
  const [totalQuotes, setTotalQuotes] = useState(0)

  useEffect(() => {
    setTotalQuotes(quotes ? quotes.length : 0)
  }, [quotes])

  return (
    <div>
      <h2>Quotes ({totalQuotes})</h2>

      <div>
      {
        !quotes
        ?
        <p>Cargando citas...</p>
        :
        quotes.map((quote, index) =>
          <Quote
            id={index}
            text={quote.text}
            key={index}
          />
        )
      }
      </div>
    </div>
  )
}

QuotesList.propTypes = {
  quotes: PropTypes.array.isRequired
}

export default QuotesList
