import React from 'react'

export const DropIndicator:React.FC<{beforeId:string,status:number}>=({
    beforeId,status
 }) =>{
  return (
    <div 
    data-before={beforeId || "-1"}
    data-column={status}
    className='my-0.5 h-0.5 w-full bg-violet-400 opacity-0'>
      
    </div>
  )
}
