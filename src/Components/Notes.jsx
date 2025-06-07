import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import './notes.css'
import { v4 as uuid } from 'uuid'
import Note from './Note'
import { useAuth } from '../AuthContext'
import NoteModal from './NoteModal'

const Notes = () => {
    const { user } = useAuth()
    const [notes, setNotes] = useState(() => {
        if (user?.email) {
          const savedNotes = localStorage.getItem(`notes_${user.email}`);
          return savedNotes ? JSON.parse(savedNotes) : [];
        }
        return [];
    });
    
    const [inputText, setInputText] = useState("")
    const [editToggle, setEditToggle] = useState(null)
    const [noteVariant, setNoteVariant] = useState("default")
    const [selectedNote, setSelectedNote] = useState(null)

    useEffect(() => {
        if (user?.email) {
          localStorage.setItem(`notes_${user.email}`, JSON.stringify(notes));
        }
    }, [notes, user?.email]);

    const handleExpandClick = (note) => {
        setSelectedNote(note);
    }

    const closeModal = () => {
        setSelectedNote(null);
    }

    const editHandler = (id, text) => {
        setEditToggle(id)
        setInputText(text)
    }
    
    const saveHandler = () => {
        if(editToggle){
            setNotes(notes.map((note) => (
                note.id === editToggle ?
                {...note, text: inputText, variant: noteVariant}
                : note
            )))
        } else {
            setNotes((prevNotes) => [
            ...prevNotes, {
                id: uuid(),
                text: inputText,
                variant: noteVariant
            }
        ])
        }
        
        setInputText("")
        setEditToggle(null)
        setNoteVariant("default");
    }

    const deleteHandler = (id) => {
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }

    if (!user) {
        return <div> Please sign in </div>
    }

    return (
        <div className='notes'>
            {notes.map((note) => (
                editToggle === note.id ? 
                <CreateNote 
                    key={note.id}
                    inputText={inputText} 
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                    variant={noteVariant}
                    setVariant={setNoteVariant}
                />
                :
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    variant={note.variant || "default"}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    onExpandClick={handleExpandClick}
                />
            ))}
            
            {editToggle === null && (
                <CreateNote 
                    inputText={inputText} 
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                    variant={noteVariant}
                    setVariant={setNoteVariant}
                />
            )}
            
            <NoteModal note={selectedNote} onClose={closeModal} />
        </div>
    )
}

export default Notes