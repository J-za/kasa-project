import starFilled from '../../assets/star-filled.svg'
import starEmpty from '../../assets/star-empty.svg'
import './starDisplay.scss'

function StarDisplay({ rating }) {
  const maxStars = 5
  const starsNumber = parseInt(rating)

  return (
    <div className="star-display">
      {/* Affiche l’étoile pleine si l’index est inférieur à la note */}
      {[...Array(maxStars)].map((_, i) => (
        <img
          key={i}
          src={i < starsNumber ? starFilled : starEmpty}
          alt={i < starsNumber ? 'Etoile pleine' : 'Etoile vide'}
          className="star-icon"
        />
      ))}
    </div>
  )
}

export default StarDisplay
