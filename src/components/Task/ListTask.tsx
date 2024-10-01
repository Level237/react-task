import React from 'react'
import { CardTask } from '../ui/cardTask'
import { TaskStore } from '../../store/TaskStore'

export const ListTask:React.FC<{ status:number}>=({
    status
 }) =>{

    const tasks=TaskStore((state)=>state.tasks)
    const taksFilter=tasks.filter((el)=>{
        return el.status===status;
    })
  return (
    <div className='flex flex-col gap-3'>

        {taksFilter.map((el)=>{

            return (
                <CardTask 
                key={el.id}
                id={el.id}
        title={el.title}
        priority={el.priority}
        content={el.description}
        status={el.status}
        date={el.date}
        />
            )
        })}
        
      
     
    </div>
  )
}
