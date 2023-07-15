import React from 'react'


const TaskContainer = ({ children }) => {
    return (
        <section className='d-flex justify-content-center'>
            <div style={{width:"90%"}}>{ children }</div>
        </section>
    )
}


export default TaskContainer