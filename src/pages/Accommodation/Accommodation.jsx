import Slideshow from '../../components/Slideshow/Slideshow'
import accommodations from '../../datas/accommodations.json'
import Collapse from '../../components/Collapse/Collapse'
import './accommodation.scss'
import { useParams, Navigate } from 'react-router'
import StarDisplay from '../../components/StarDisplay/StarDisplay'

function Accommodation() {
  const { id } = useParams()
  const accommodation = accommodations.find((item) => item.id === id)

  if (!accommodation) return <Navigate to="*" replace />

  return (
    <>
      <Slideshow pictures={accommodation.pictures} />
      <section className="property-content">
        <section className="property-infos">
          <h1>{accommodation.title}</h1>
          <p className="location">{accommodation.location}</p>
          <div className="tag-content">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
        <section className="host-details">
          <div className="host-content">
            {/*Insertion d'un saut de ligne entre le prénom et le nom.*/}
            <p>{accommodation.host.name.replace(' ', '\n')}</p>
            <img
              src={accommodation.host.picture}
              alt={`Photo de ${accommodation.host.name}`}
            />
          </div>
          <StarDisplay rating={accommodation.rating} />
        </section>
      </section>
      <section className="collapse-accommodation">
        <Collapse
          // Concatenation de l'ID avec un suffixe unique pour éviter les conflits de clé.
          key={`${accommodation.id}-description`}
          title="Description"
          className="collapse-accommodation-item"
        >
          <p>{accommodation.description}</p>
        </Collapse>
        <Collapse
          key={`${accommodation.id}-equipements`}
          title="Équipements"
          className="collapse-accommodation-item"
        >
          <ul>
            {accommodation.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </>
  )
}

export default Accommodation
