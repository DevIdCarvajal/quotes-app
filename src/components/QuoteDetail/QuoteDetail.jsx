import { useParams, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

const QuoteDetail = ({quotes}) => {
  const navigate = useNavigate()
  const {id} = useParams()

  return (
    <div className="QuoteDetail">
      <div>
        <img
          src={quotes[id].image}
          alt=""
          style={{ width: "240px" }}
        />
      </div>
      <div>
        <cite>
          {quotes[id].text}
        </cite>
      </div>
      <div>
        ({quotes[id].author})
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Atrás</button>
      </div>
    </div>
  )
}

QuoteDetail.propTypes = {
  quotes: PropTypes.array.isRequired
}

export default QuoteDetail
