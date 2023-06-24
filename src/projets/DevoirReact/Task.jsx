import React from 'react'
import { NewTaskstyle } from './TableStyle'

export default function Task({type,date}) {
  return (
   <NewTaskstyle>
     <div>
        <h3>{type}</h3>
        <small className='text-danger'>{date}</small>
    </div>  
   </NewTaskstyle>
  )
}
