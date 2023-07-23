import React, { useEffect, useState } from 'react'
import TaskBanner from '../TaskBanner/TaskBanner'
import TaskContainer from '../TaskContainer/TaskContainer'
import TaskCreator from '../TaskCreator/TaskCreator'
import TaskTable from '../TaskTable/TaskTable'
import TaskVisibilityControl from '../TaskVisibilityControl/TaskVisibilityControl'


const TaskListContainer = () => {
    const [taskItems, setTaskItems] = useState([])
    const [showCompleted, setShowCompleted] = useState(false)


    useEffect(() =>{
        let data = localStorage.getItem("tasks")
        if(data){
            setTaskItems(JSON.parse(data))
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(taskItems))
    }, [taskItems])


    const createNewTask = (taskName)=>{
        if(!taskItems.find(t => t.name === taskName)){
            setTaskItems([...taskItems, {name: taskName, done: false}])
        }
    }


    const toggleTask = (task) => setTaskItems(
            taskItems.map((t) =>  (t.name === task.name ? {...t, done: !t.done} : t ))
        )


    const cleanTasks = ()=>{
        setTaskItems(taskItems.filter(task => !task.done))
        setShowCompleted(false)
    }



    return (
        <section>
            <TaskBanner taskItems={taskItems} />

            <TaskContainer>
                <TaskCreator createNewTask={createNewTask} />

                <TaskTable taskItems={taskItems} toggleTask={toggleTask} />

                <TaskVisibilityControl
                    description="Completed Tasks"
                    showCompleted={showCompleted}
                    callback={checked => setShowCompleted(checked)}
                    cleanTasks={cleanTasks}
                />

                {showCompleted &&(
                    <TaskTable
                    taskItems={taskItems}
                    toggleTask={toggleTask}
                    showCompleted={showCompleted}
                    />
                )}
            </TaskContainer>
        </section>
    )
}



export default TaskListContainer