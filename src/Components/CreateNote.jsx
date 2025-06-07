import React from 'react'

const CreateNote = ({ inputText, setInputText, saveHandler, variant, setVariant }) => {

    const char = 100;
    const charLimit = char - inputText.length;

  return (
    <div className={variant === 'default' ? 'note' : `note note--${variant}`}>
        <div className='variant-selector'>
          <button
            className={`variant-btn ${variant === 'default' ? 'active' : ''}`}
            onClick={() => setVariant('default')}
          >
            Default
          </button>
          <button 
            className={`variant-btn ${variant === 'priority' ? 'active' : ''}`}
            onClick={() => setVariant('priority')}
          >
            Priority
          </button>
        </div>

        <textarea 
          cols={10}
          rows={5}
          placeholder='Type your note...'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          maxLength={100}
        ></textarea>

        <div className='note-footer'>
            <span className='label'> {charLimit } Left  </span>
            <button className='note-save' onClick={saveHandler}>Save</button>
        </div>



    </div>
  )
}

export default CreateNote
