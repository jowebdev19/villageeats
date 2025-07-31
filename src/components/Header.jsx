import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  return (
    <nav>
        <h1 onClick={() => navigate('/')}>Village Eats</h1>
        <ul>
            <Link to='/' style={{textDecoration: "none"}}><li className="nav-link">Home</li></Link>
            <Link to='/Recipes' style={{textDecoration: "none"}}><li className="nav-link">Recipes</li></Link>
            <Link to="/Favorites" style={{textDecoration: "none"}}><li className="nav-link">Favorites</li></Link>
        </ul>
    </nav>
  )
}
