import {useState} from 'react'


export function FormNote({addNote}){
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) =>{
    setNewNote(event.target.value)
    // const newNote = event.target.value
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() > 0.5
      }
      addNote(noteObject)
      setNewNote('')
  }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                onChange={handleChange} 
                value={newNote}
                placeholder='Write your note content'
                />
            <button >Crear nota</button>
        </form>
      )
}