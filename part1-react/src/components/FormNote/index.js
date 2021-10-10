// import {useState} from 'react'


export function FormNote({handleSub,value,handleChan}){
    // const [newNote, setNewNote] = useState('')
    
    // const handleSubmit = ()=>{
    //     console.log('hola mundo')
    // }
    // const handleChange = ()=>{
    //     console.log('adios')
    // }
    return (
        <form onSubmit={handleSub}>
            <input type='text' onChange={handleChan} value={value}/>
            <button >Crear nota</button>
        </form>
      )
}