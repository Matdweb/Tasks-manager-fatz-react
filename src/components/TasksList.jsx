import { useContext } from 'react' 
import TasksCard from './TasksCard'
import {TasksContext} from '../context/TaskContext'

function TasksList() {

    const context = useContext(TasksContext)

    if(context.tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }

    return(
        <div>
            {context.tasks.map((task) => (
                <TasksCard key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TasksList