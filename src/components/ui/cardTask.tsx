import { MoreHorizontal } from 'lucide-react'
import React from 'react'

export const  CardTask:React.FC<{ bgTask: string,title:string,content:string,status:string,color:string }>=({
    bgTask,title,content,status,color
}) =>{
  return (
    <>
      <div className={`w-full flex flex-col  rounded-md px-3 py-4 bg-[${bgTask}]`}>
        <div className='flex mb-3 items-center justify-between'>
            <div className={`px-2 rounded-lg  bg-[${color}]`}>
                <h2 className='text-xs text-white'>{status}</h2>
                
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
        <div className={`px-2 rounded-lg border border-[${color}]  bg-transparent`}>
                <h2 className={`text-xs text-[${color}]`}>12 oct 2024</h2>
                
            </div>
        </div>
        </div>
    </>
  )
}
