import React from 'react';
import { useState } from 'react';

export const ToDoApp = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [filterValue, setFilterValue] = useState(2);
  const [notes, setNotes] = useState([]);
  
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  function createNote(event) {
    event.preventDefault();
    if(!noteTitle){
        return alert('Please provide a valid note title');
    }
    let newNote = {
        id: Date.now(),
        title: noteTitle,
        isComplete: false
    }
    setNotes([...notes, newNote]);
    setNoteTitle('');

  }


    const removeNote = (id) => {
        const updateNote = notes.filter(item => item.id !== id);
        setNotes(updateNote);
    };

    const updateHandler = (e) => {
        e.preventDefault();
        if(!noteTitle){
            return alert('Please provide a valid note title');
        }

        const updateNote = notes.map(item => {
            if(item.id === editableNote.id){
                item.title = noteTitle
            }

            return item
        });
        setNotes(updateNote);
        setEditMode(false);
        setEditableNote(null);
        setNoteTitle('');
    }
    function editNote(id) {

        const focusNote = notes.find(item => item.id === id);
        setEditMode(true);
        setEditableNote(focusNote);     
        setNoteTitle(focusNote.title);

    }

    const completeNote = (id) => {
        const updateNote = notes.map(item => {
            if(item.id === id){
                item.isComplete = !item.isComplete;
            }
            return item
        });
        setNotes(updateNote);
    }

    
    const showNotes = () => {
        if(Number(filterValue) === 1){
            let result = notes.filter( item => item.isComplete === true).map((note) => (
                <li key={note.id}>
                <input checked onClick={() => completeNote(note.id)} type="checkbox" name="" id="" />                
                <span>{note.title}</span>
                <button onClick={() => editNote(note.id)}>Edit</button>
                <button onClick={ () => removeNote(note.id)}>Delete</button>
                </li>
            ) )
            return result;
        } else if(Number(filterValue) === 0){
           let result = notes.filter( item => item.isComplete === false).map((note) => (
                <li key={note.id}>
                <input onClick={() => completeNote(note.id)} type="checkbox" name="" id="" />                
                <span>{note.title}</span>
                <button onClick={() => editNote(note.id)}>Edit</button>
                <button onClick={ () => removeNote(note.id)}>Delete</button>
                </li>
            ) )
            return result;
        } else{
            let result = notes.map((note) => (
                <li key={note.id}>
                <input checked={note.isComplete === true ? true : false} onClick={() => completeNote(note.id)} type="checkbox" name="" id="" />                
                <span>{note.title}</span>
                <button onClick={() => editNote(note.id)}>Edit</button>
                <button onClick={ () => removeNote(note.id)}>Delete</button>
                </li>
            ) )
            return result;
        }
    }

  return (
    <div>
        <h2>To Do Application</h2>
        <p>Write your notes in the box and click add button to start.</p>
        <form onSubmit={editMode ? updateHandler: createNote}>
            <input onChange={(event) => setNoteTitle(event.target.value)} value={noteTitle} type="text" />
            <input type="submit" value={editMode ? "update note" : "add note"} />
        </form>
        <label htmlFor="filter">Filter Here: </label>
        <select defaultValue={2} onChange={(event) => setFilterValue(event.target.value)} name="filter" id="">
            <option value="2">All</option>
            <option value="0">Incomplete</option>
            <option value="1">Complete</option>
        </select>
        <ul>
            {showNotes()}
        </ul>
    </div>
  )
}
