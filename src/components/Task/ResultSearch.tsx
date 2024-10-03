import React, { useEffect } from 'react'
import { TaskStore } from '../../store/TaskStore'
import { SearchStore } from '../../store/SearchStore'
import { TaskItem } from './TaskItem'

export const ResultSearch:React.FC<{}>=({})=> {

    const search=SearchStore((set)=>set.search)
    const searchTask=TaskStore((set)=>set.searchTask)
    const tasks=TaskStore((set)=>set.tasksResult)
    useEffect(()=>{
        searchTask(search)
    },[search])
  return (
    <>
    {tasks.length===0 && 
    <section className='flex justify-center items-center mt-32'>
    <div className='text-red-600'>Aucune tache trouvé</div>
    </section>
    }
      <section className='grid grid-cols-4 gap-2 mt-8 mx-2'>
        
        {tasks.map((el)=>{
            return (
                <TaskItem
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
      </section>
    </>
  )
}
