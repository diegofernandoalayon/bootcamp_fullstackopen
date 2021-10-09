import React, { useEffect,useState } from 'react'
import Note from './Note'
import { getAllNotes,createNote} from './services/notes'

// import './estilos.css'


const App = () => {
  
  const [notes,setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
     
    getAllNotes().then((data)=>{
      setNotes(data)
      setLoading(false)
    })

  },[])

  const handleChange = (event) =>{
    setNewNote(event.target.value)
    // const newNote = event.target.value
  }

  const handleSubmit = event =>{
    event.preventDefault()
    const noteToAddToState = {
      title: newNote.length<11?newNote:newNote.slice(0,10),
      body: newNote,
      userId: 1
    }
    createNote(noteToAddToState).then((data)=>{
      setNotes(prevNotes=>prevNotes.concat(data))
    }).catch(error=>console.error(error))

    // setNotes([...notes,noteToAddToState])
    // setNotes(notes.concat(noteToAddToState))
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      {loading?'cargando...':''}
      <ol>
        {notes.map(note=>(
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button >Crear nota</button>
      </form>
    </div>
  )
}

export default App