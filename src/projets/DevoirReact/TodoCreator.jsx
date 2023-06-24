import Boutton from '../components/Boutton'
import React from 'react'

export default function TodoCreator({date,setDate,type,setType,onClick}) {
  return (
    <div className='d-flex' 
        style={{
        justifyContent:'space-between',
        borderBottom:'1px solid #666',
        marginBottom:'2rem'
    }}>
        <input type="datetime-local" value={date} onChange={setDate} />
        <input type="text" value={type} onChange={setType} placeholder='Specifiez la tache'/>
        <Boutton text="+Ajouter" onClick={onClick} />
    </div>
  )
}
