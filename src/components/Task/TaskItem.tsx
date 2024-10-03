import { Clock, Edit, MoreHorizontal, Trash } from 'lucide-react'
import React from 'react'
import { TaskStore } from '../../store/TaskStore'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DropIndicator } from '../DropIndicator'
import { TaskType } from '../../types/TaskType'
import {motion} from "framer-motion"
import { deleteTaskApi } from '../../api/Tasks/DeleteTaskApi'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { EditTask } from '../Task/EditTask'

export const  TaskItem:React.FC<{ id:string,title:string,description:string,column:string,priority:string,date:string,isComplete:boolean }>=({
    id,title,description,column,priority,date
 }) =>{
  return (
    <div>
      <motion.div
      layout
      layoutId={id}
      draggable='true'
      className={`w-full flex flex-col cursor-grab active:cursor-grabbing  rounded-md px-3 py-4 ${priority ==="urgent" ? 'bg-[#3eff0e7e]' : 'bg-[#ff09095d]'} `}>
        <div className='flex mb-3 items-center justify-between'>
            <div className={`px-2 py-1 border rounded-lg  ${priority ==="urgent" ? 'bg-[#0dd338c7]' : 'bg-[#ff2020d3]'}`}>
              {column==="complete" ? <h2 className='text-xs text-white'>complete</h2>  : <h2 className='text-xs text-black'>{priority}</h2>}
                
                
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
    </div>
  )
}
