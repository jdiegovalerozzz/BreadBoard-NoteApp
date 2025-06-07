import React from 'react'

const Note = ({ id, text, editHandler, deleteHandler, variant = 'default', onExpandClick }) => {
  return (
    <div className={variant === 'default' ? 'note' : `note note--${variant}`}>
      {variant === 'priority' && (
        <div className='note-priority-flag'></div>
      )}
        <div className='note-body'>{text}</div>

        <div className='note-footer' style={{justifyContent: 'flex-end'}}> 
          
            <button className='note-save' onClick={() => editHandler(id, text)} >✎</button>
          
            <button style={{fontWeight: 'bold'}} className='note-save' onClick={() => deleteHandler(id)} > ✕ </button>

            <button 
              className='note-save' 
              onClick={() => onExpandClick({ id, text, variant })}
              style={{ marginLeft: '8px' }}
            >
            🔍
            </button>

            
        </div>
    </div>
  )
}

export default Note
