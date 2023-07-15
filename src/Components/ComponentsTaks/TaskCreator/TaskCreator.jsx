import React, { useState } from 'react'
import Swal from 'sweetalert2'


const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("")


    const handleSubmit = (event) =>{
        if(newTaskName.trim() === ""){
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Please enter a task',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        event.preventDefault()
        createNewTask(newTaskName)
        setNewTaskName("")
    }


    return (
        <form className='my-2 row' onSubmit={handleSubmit}>
            <div className='col-9'>
                <input
                type='text'
                className='form-control'
                value={newTaskName}
                onChange={(event) => setNewTaskName(event.target.value)}
                placeholder='Enter a new task...'
                autoFocus
                />
            </div>

            <button style={{fontWeight:"bold", fontSize:"18px", backgroundColor:"rgb(0, 45, 129)", color:"rgb(12, 12, 12)"}} className='btn col-3 p-0' type='submit'>   
                Save task
            </button>
        </form>
    )
}



export default TaskCreator