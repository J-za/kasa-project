import { NavLink } from 'react-router'
import HeaderNavLogo from '../../assets/white-logo.png'
import './header.scss'

function Header() {
  return (
    <header>
      <img src={HeaderNavLogo} alt="Logo Kasa" />
      <nav>
        <NavLink className="nav-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="nav-link" to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
