import { Clock, Edit, MoreHorizontal, Trash } from 'lucide-react'
import React from 'react'
import { TaskStore } from '../../store/TaskStore'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { DropIndicator } from '../DropIndicator'
import { TaskType } from '../../types/TaskType'
import {motion} from "framer-motion"
import { deleteTaskApi } from '../../api/Tasks/DeleteTaskApi'

export const  CardTask:React.FC<{ id:string,title:string,description:string,column:string,priority:string,date:string,handleDragStart:(e:any,task:TaskType)=>void,isComplete:boolean }>=({
   id,title,description,column,priority,date,handleDragStart,isComplete
}) =>{

  
  const handleDrop=()=>{

  }
  const deleteTask=TaskStore((state)=>state.deleteTask)

  const deleteHandler=async(id:any)=>{
    
    await deleteTaskApi(id)
    deleteTask(id)
  }
  return (
    <>
    <DropIndicator beforeId={id} column={column}/>
      <motion.div
      layout
      layoutId={id}
      draggable='true'
      onDragStart={(e)=>handleDragStart(e,{id,title,description,column,priority,date,isComplete})}
      className={`w-full flex flex-col cursor-grab active:cursor-grabbing  rounded-md px-3 py-4 ${priority ==="urgent" ? 'bg-[#3eff0e7e]' : 'bg-[#ff09095d]'} `}>
        <div className='flex mb-3 items-center justify-between'>
            <div className={`px-2 py-1 border rounded-lg  ${priority ==="urgent" ? 'bg-[#0dd338c7]' : 'bg-[#ff2020d3]'}`}>
              {column==="complete" ? <h2 className='text-xs text-white'>complete</h2>  : <h2 className='text-xs text-black'>{priority}</h2>}
                
                
            </div>
            <div>
            <Popover>
      <PopoverTrigger asChild>
        <MoreHorizontal className={`w-4 h-4 text-[#000]`}/>
      </PopoverTrigger>
      <PopoverContent className="w-24">
        <div className='flex gap-3 flex-col'>
          <div onClick={()=>deleteHandler(id)} className='flex cursor-pointer items-center gap-3 justify-center'>
            <Trash className='w-4 h-4 text-[#000]'/>
           <h2 className='text-xs'> Delete</h2>
          </div>
          <div className='flex cursor-pointer items-center gap-3 justify-center'>
            <Edit className='w-4 h-4 text-[#000]'/>
           <h2 className='text-xs'> Edit</h2>
          </div>
        </div>
      </PopoverContent>
    </Popover>
            
            </div>
        </div>
    <h2 className={`text-lg text-[#000] font-bold`}>{title}</h2>
    <div>
        <span className={`text-[#000] line-clamp-3 mt-2 text-xs`}>{description}</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className={`px-2 py-2 flex items-center gap-2 rounded-lg border border-[#fff]  bg-transparent`}>
          <Clock className='w-4 h-4'/>
                <h2 className={`text-xs font-bold text-[#000]`}>{date}</h2>
                
            </div>
        </div>
        </motion.div>
    </>
  )
}