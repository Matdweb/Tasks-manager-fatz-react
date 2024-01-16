import {createContext} from 'react'
import {Tasks as data} from '../Tasks'
import {useState, useEffect} from 'react'

export const TasksContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

    useEffect(()=>{
        setTasks(data)
    }, [])


    function createTask({title,description}){
      setTasks([...tasks, {
        title: title, 
        id: (tasks.length)+1,
        description: description
      }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id != taskId))
  }

  return (
    <TasksContext.Provider value={{  //este valor va a ser el objeto llamado en cada componente con el useContext()
      tasks,
      createTask, 
      deleteTask
    }}>
        {props.children}
    </TasksContext.Provider>
  )
}
