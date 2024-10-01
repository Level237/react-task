import { Clock, MoreHorizontal } from 'lucide-react'
import React from 'react'

export const  CardTask:React.FC<{ bgTask: string,title:string,content:string,status:number,color:string,priority:string }>=({
    bgTask,title,content,status,color,priority
}) =>{
  return (
    <>
      <div className={`w-full flex flex-col  rounded-md px-3 py-4 ${priority ==="urgent" ? 'bg-[#3eff0e7e]' : 'bg-[#ff09095d]'} bg-[${bgTask}]`}>
        <div className='flex mb-3 items-center justify-between'>
            <div className={`px-2 py-1 border rounded-lg  ${priority ==="urgent" ? 'bg-[#c8ebc0]' : 'bg-[#ebf8fad0]'}`}>
                <h2 className='text-xs text-black'>{priority}</h2>
                
            </div>
            <div>
            <MoreHorizontal className={`w-4 h-4 text-[${color}]`}/>
            </div>
        </div>
    <h2 className={`text-lg text-[${color}] font-bold`}>{title}</h2>
    <div>
        <span className={`text-[${color}] line-clamp-3 mt-2 text-xs`}>{content}</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className={`px-2 py-2 flex items-center gap-2 rounded-lg border border-[#fff]  bg-transparent`}>
          <Clock className='w-4 h-4'/>
                <h2 className={`text-xs font-bold text-[#000]`}>12 oct 2024</h2>
                
            </div>
        </div>
        </div>
    </>
  )
}
