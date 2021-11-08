import React, { useEffect,useState } from 'react'
import Notification from './components/Notification'
import { FormNote } from './components/FormNote'

import Note from './Note'
import noteService from './services/notes'
import loginService from './services/login'

// import './estilos.css'
import './index.css'
import FormLogin from './components/FormLogin'


const App = () => {
  
  const [notes,setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(()=>{
    setLoading(true)
     
    noteService
    .getAllNotes().then((data)=>{
      // console.log(data)
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
      content: newNote,
      important: Math.random() > 0.5
    }
    // const {token} = user
    noteService
    .createNote(noteToAddToState)
    .then((data)=>{
      setNotes(prevNotes=>prevNotes.concat(data))
      setNewNote('')
    }).catch(error=>{
      console.error(error)
      setError('La API fallo')
    })

    // setNotes([...notes,noteToAddToState])
    // setNotes(notes.concat(noteToAddToState))
   
  
  }
  const handleLoginSubmit = (event) =>{
    event.preventDefault()
    loginService.login({
      username,
      password
    }).then((user)=>{
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }).catch(()=>{
      setError("Wrong credentials")
      setUsername('')
      setPassword('')
      setTimeout(()=>{
        setError(null)
      },5000)
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      {loading?'cargando...':''}
      {/* {error ? error:''} */}
      <Notification  message={error}/>
      {
        user
          ? <FormNote handleSub={handleSubmit} value={newNote} handleChan={handleChange}/>
          : <FormLogin 
          username={username}
          password={password}
          handleLoginSubmit={handleLoginSubmit}
          handleUsernameChange={({target})=> setUsername(target.value)}
          handlePasswordChange={({target})=> setPassword(target.value)}
          />
      }
      
      <ol>
        {notes.map(note=>(
          <Note key={note.id} {...note} />
        ))}
      </ol>
      
    </div>
  )
}

export default App