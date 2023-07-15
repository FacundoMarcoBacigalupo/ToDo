import React from 'react'


const TaskRow = ({ task, toggleTask }) => {
    return (
        <li className="liToDo">
            <input type="checkbox" className="inputToDo" id={task.name} name={task.name} checked={task.done} onChange={() => toggleTask(task)}/>

            <label className="labelToDo" htmlFor={task.name}>{ task.name }</label>
        </li>
    )
}



export default TaskRow