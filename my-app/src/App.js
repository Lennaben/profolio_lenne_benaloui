
import './App.css';

import React, { useState } from "react"

function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button onClick={toggleModal} className='btn-ouverture'>Ouvrir la fenêtre modale</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Titre de la fenêtre modale</h2>
            <p>Contenu de la fenêtre modale</p>
            <button onClick={toggleModal}>Fermer la fenêtre modale</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
