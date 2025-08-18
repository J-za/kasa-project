import { Link } from 'react-router'
import HeaderNavLogo from '../../assets/white-logo.png'
import './header.scss'

function Header() {
  return (
    <header>
      <img src={HeaderNavLogo} alt="Logo Kasa" />
      <nav>
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
