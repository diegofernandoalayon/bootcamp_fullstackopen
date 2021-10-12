import axios from 'axios'
const baseUrl='https://immense-cove-52767.herokuapp.com/api/notes'

export const getAllNotes = () =>{
    return axios.get(baseUrl)
    .then((response)=>{
      const {data} = response
      return data
    })
}

export const createNote = (newNote)=>{
    return axios.post(baseUrl,newNote)
    .then(response=>{
      const {data} = response
      return data
    })
}