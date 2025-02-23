import { Link } from "react-router-dom"

const Menu = () =>
  <nav>
    <Link to="/">Inicio</Link>|
    <Link to="/quotes">Citas célebres</Link>
  </nav>

export default Menu
