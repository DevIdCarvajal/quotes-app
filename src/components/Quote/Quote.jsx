import bulletImg from "./bullet.png"
import "./Quote.scss"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Quote = ({id, text}) => {
  return (
    <div className="Quote">
      <div>
        <cite>
          <img src={bulletImg} alt="·" />
          {text}
        </cite>
      </div>
      <div>
        <Link to={`/quote/${id}`}>Ir al detalle</Link>
      </div>
    </div>
  )
}

Quote.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Quote
