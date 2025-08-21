import { Link } from 'react-router'
import Error404 from '../../assets/404.png'
import './error.scss'

function Error() {
  return (
    <section className="error-content">
      <img src={Error404} alt="Image erreur 404"></img>
      <p>Oups ! La page que vous&nbsp;demandez n'existe pas.</p>
      <Link to="/" className="home-link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default Error
