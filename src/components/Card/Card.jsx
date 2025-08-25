import { Link } from 'react-router'
import './Card.scss'

function Card({ id, title, cover }) {
  return (
    <Link to={`/accomodation/${id}`} className="card">
      <img src={cover} alt={`Photo du logement : ${title}`} />
      <h2>{title}</h2>
    </Link>
  )
}

export default Card
