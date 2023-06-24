import React from 'react'
import TodoCreator from './TodoCreator'
import Task from './Task'

export default function TodoList() {
  return (
    <div>
        <div className='d-flex bg-dark text-white'style={{justifyContent:'space-between',alignItems:'center'}}>
            <p>DATE</p>
            <p>TACHE</p>
            <p></p>
        </div>
        <TodoCreator />
        <Task />
    </div>
  )
}
