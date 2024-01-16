import {useState, useContext} from 'react'
import {TasksContext} from '../context/TaskContext'

function TasksForm(){

    const context = useContext(TasksContext)

    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        context.createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} type="text" placeholder="Escribe una nueva tarea" onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <textarea onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            <button>
                save
            </button>
        </form>
    )
}

export default TasksForm