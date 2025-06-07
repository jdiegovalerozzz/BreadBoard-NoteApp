import React from 'react'
import './notes.css'

const NoteModal = ({ note, onClose }) => {
  if (!note) return null;

  return (
    <div className="modal-overlay">
      <div className={`note-modal ${note.variant === 'priority' ? 'note--priority' : ''}`}>
        <div className="modal-content">
          <div className="modal-body">{note.text}</div>
          <button className="modal-close" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteModal