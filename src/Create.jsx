import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [task, setTask] = useState()
    const handleAdd = ()=> {
        //  axios.post('http://localhost:3000/add', {task: task})
         axios.post('https://todolist-1-udkx.onrender.com/add', {task: task})
         .then(result => location.reload()) 
         .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
        <input type="text" name="" id="" placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create