import axios from 'axios'
// const baseUrl='https://immense-cove-52767.herokuapp.com/api/notes'
const baseUrl='http://localhost:3001/api/notes'

export const getAllNotes = () =>{
    return axios.get(baseUrl)
    .then((response)=>{
      const {data} = response
      return data 
    })

    // return fetch(baseUrl).then(data => data.json()).then(dataa =>dataa)

    // https://pokeapi.co/api/v2/pokemon/1/
}

export const createNote = (newNote, {token})=>{
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
    return axios.post(baseUrl,newNote, config)
    .then(response=>{
      const {data} = response
      return data
    })
}