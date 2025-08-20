import { NavLink } from 'react-router'
import HeaderNavLogo from '../../assets/white-logo.png'
import './header.scss'

function Header() {
  return (
    <header>
      <img src={HeaderNavLogo} alt="Logo Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
