import React from 'react'
import { CardTask } from '../ui/cardTask'
import { TaskStore } from '../../store/TaskStore'
import { TaskType } from '../../types/TaskType'

export const ListTask:React.FC<{ tasks:TaskType[]}>=({
    tasks
 }) =>{

  return (
    <div className='flex flex-col gap-1'>

        {tasks.map((el)=>{

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
