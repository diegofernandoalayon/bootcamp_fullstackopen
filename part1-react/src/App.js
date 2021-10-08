import React from 'react'
import {useState} from 'react'
// import './estilos.css'


const App = (props) => {
  
  const [notes,setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const handleChange = (event) =>{
    setNewNote(event.target.value)
    // const newNote = event.target.value
  }

  const handleSubmit = event =>{
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    // setNotes([...notes,noteToAddToState])
    setNotes(notes.concat(noteToAddToState))
    setNewNote('')
  }
  const handleShowAll = event =>{
    setShowAll(()=>!showAll)
  }
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll?"show only important":'show all'}</button>
      <ul>
        {notes.filter(note=>{
          if(showAll) return true
          return note.important ===true
        })
        .map(note=><li key={note.id}>{note.id} {note.content} {note.date}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button >Crear nota</button>
      </form>
    </div>
  )
}

export default App