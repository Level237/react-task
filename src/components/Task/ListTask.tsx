import React from 'react'
import { CardTask } from '../ui/cardTask'
import { TaskStore } from '../../store/TaskStore'
import { TaskType } from '../../types/TaskType';

export const ListTask:React.FC<{ tasks:TaskType[],handleDragStart:(e:any,task:TaskType)=>void}>=({
    tasks,handleDragStart
 }) =>{

  return (
    <div className='flex flex-col gap-1'>

        {tasks.map((el)=>{

            return (
                <CardTask
                handleDragStart={handleDragStart}
                isComplete={el.isComplete}
                key={el.id}
                id={el.id}
        title={el.title}
        priority={el.priority}
        description={el.description}
        column={el.column}
        date={el.date}
        />
            )
        })}
        
      
     
    </div>
  )
}
