import { Clock, Edit, MoreHorizontal, Trash } from 'lucide-react'
import React from 'react'
import { TaskStore } from '../../store/TaskStore'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export const  CardTask:React.FC<{ id:string,title:string,content:string,status:number,priority:string,date:string }>=({
   id,title,content,status,priority,date
}) =>{

  const deleteTask=TaskStore((state)=>state.deleteTask)
  return (
    <>
      <div className={`w-full flex flex-col  rounded-md px-3 py-4 ${priority ==="urgent" ? 'bg-[#3eff0e7e]' : 'bg-[#ff09095d]'} `}>
        <div className='flex mb-3 items-center justify-between'>
            <div className={`px-2 py-1 border rounded-lg  ${priority ==="urgent" ? 'bg-[#d30d0dc7]' : 'bg-[#3620ff93]'}`}>
                <h2 className='text-xs text-white'>{priority}</h2>
                
            </div>
            <div>
            <Popover>
      <PopoverTrigger asChild>
        <MoreHorizontal className={`w-4 h-4 text-[#000]`}/>
      </PopoverTrigger>
      <PopoverContent className="w-24">
        <div className='flex gap-3 flex-col'>
          <div onClick={()=>deleteTask(id)} className='flex cursor-pointer items-center gap-3 justify-center'>
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
        <span className={`text-[#000] line-clamp-3 mt-2 text-xs`}>{content}</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className={`px-2 py-2 flex items-center gap-2 rounded-lg border border-[#fff]  bg-transparent`}>
          <Clock className='w-4 h-4'/>
                <h2 className={`text-xs font-bold text-[#000]`}>{date}</h2>
                
            </div>
        </div>
        </div>
    </>
  )
}
