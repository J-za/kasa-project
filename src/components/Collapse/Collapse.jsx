import { useState } from 'react'
import CloseVector from '../../assets/close-vector.svg'
import './collapse.scss'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2>{title}</h2>
        <button
          className="collapse-toggle-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={CloseVector}
            alt={isOpen ? 'Icone ouvert' : 'Icone fermé'}
            className={`arrow-icon ${isOpen ? 'rotated' : ''}`}
          />
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'active' : ''}`}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Collapse
