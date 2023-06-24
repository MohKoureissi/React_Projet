import React, {useState} from 'react'
import Title from '../components/Title'
import TodoCreator from './TodoCreator'
import Task from './Task'
import { TableStyle } from './TableStyle'
export default function TaskTracerApp() {
    const [newTask, setNewTask]=useState({
        date:'',
        type:'',
        completed:''
    })
    const handleChangeDate=(e)=>{
        setNewTask({...newTask,date:e.target.value})
    }
    const handleChangeType=(e)=>{
        setNewTask({...newTask,type:e.target.value})
    }
    let tasks=[{date:'',type:''}];
    const [taskList, setTaskList]=useState(tasks)
    const addNewTask=()=>{
        setTaskList([...taskList, {date: newTask.date,type: newTask.type}])
    }
  return (
    <div>
        <Title  classes={''} text={'Suivi Des Tâches'}/>
        <div>
       <TableStyle>
       <ul className='table-head'>
        <li>Date</li>
        <li>Tache</li>
       </ul>
       <TodoCreator 
        date={newTask.date}
        setDate={handleChangeDate}
        type={newTask.type}
        setType={handleChangeType}
        onClick={addNewTask}
        />
       <ul className='table-row'>
                {taskList.map((tas,index)=>{
                    return tas.date!=="" && tas.type!==""?<Task key={index} date={tas.date} type={tas.type}/>:null
                })}
       </ul>
       </TableStyle>  
    </div>
    </div>
  )
}
