import React from 'react'
import TaskRow from "../TaskRow/TaskRow"


const TaskTable = ({ taskItems, toggleTask, showCompleted = false }) => {

    const taskTableRows = (doneValue) =>
        taskItems
        .filter((task) => task.done === doneValue)
        .map((task) => (
            <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
        ))



    return (
        <div>
            <ul className="ulToDo">{ taskTableRows(showCompleted) }</ul>
        </div>
    )
}



export default TaskTable