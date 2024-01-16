import { React, useContext } from 'react'
import { TasksContext } from '../context/TaskContext'

function TasksCard(props) {

  const context = useContext(TasksContext)

  return (
    <div>
        <h2>{props.task.title}</h2>
        <p>{props.task.description}</p>
        <button onClick={()=> context.deleteTask(props.task.id)}>
          Eliminar tarea
        </button>
    </div>
  )
}

export default TasksCard