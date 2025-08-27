import { useState } from 'react'
import RightVector from '../../assets/right-vector.svg'
import LeftVector from '../../assets/left-vector.svg'
import './slideshow.scss'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="slideshow">
      {pictures.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Slide ${index}`}
          className={`slide-image ${
            index === currentIndex ? 'active' : 'inactive'
          }`}
        />
      ))}
      {pictures.length > 1 && (
        <>
          <button className="nav-vector-right" onClick={goToNext}>
            <img src={RightVector} alt="Icone flèche droite" />
          </button>
          <button className="nav-vector-left" onClick={goToPrevious}>
            <img src={LeftVector} alt="Icone flèche gauche" />
          </button>
          <p className="counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow
