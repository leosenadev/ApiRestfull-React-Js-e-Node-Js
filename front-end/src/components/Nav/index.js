import { Link } from "react-router-dom"
import './nav.css';
function Header(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow p-3 bg-white rounded">
      <div className="container">
        <Link className="logo" to="/">API-RESTFULL</Link>
      </div>
    </nav>

  )
     
}
export default Header