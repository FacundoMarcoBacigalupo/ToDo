import React from 'react'
import Swal from 'sweetalert2'


const TaskVisibilityControl = ({ showCompleted, callback, description, cleanTasks }) => {

    const handleDelete = ()=>{
        if(showCompleted){
            Swal.fire({
                title: `¿Are you sure delete all ${description}?`,
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'rgb(0, 45, 129)',
                cancelButtonColor: 'rgb(122, 3, 3)',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                    cleanTasks() 
                }})
        }
    }



    return (
        <section style={{backgroundColor:"rgba(49, 49, 49, 0.25)"}} className='d-flex justify-content-between text-center p-2'>
            <div className='form-check form-switch'>
                <input 
                    style={{cursor:"pointer", transition:"all .5s", width:"50px", height:"20px"}}
                    type='checkbox'
                    className='form-check-input'
                    checked={showCompleted}
                    onChange={event => callback(event.target.checked)}  
                />
                <label style={{ fontSize:"18px", fontWeight:"bold"}} htmlFor="form-check-label">Show {description}</label>
            </div>

            <button style={{backgroundColor:"rgb(122, 3, 3)", color:"rgb(12, 12, 12)", fontSize:"18px", fontWeight:"bold"}} className='btn btn-sm' onClick={handleDelete}>
                Clear
            </button>
        </section>
    )
}



export default TaskVisibilityControl