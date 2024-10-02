import React, { useState } from 'react'
import { TaskType } from '../types/TaskType'
import { Card, CardHeader } from './ui/card'
import { FireExtinguisher, Trash } from 'lucide-react'
import { TaskStore } from '../store/TaskStore'
import { deleteTaskApi } from '../api/Tasks/DeleteTaskApi'

export const BunBarrel:React.FC<{setCards:(tasks:TaskType[])=>void}>=({
    setCard
 }) =>{
  const deleteTask=TaskStore((state)=>state.deleteTask)
  const [active,setActive]=useState(false)

  const handleDragOver=(e:any)=>{
    e.preventDefault();
    setActive(true)
  }

  const handleDragLeave=()=>{
    setActive(false)
  }
  const handleDragEnd=async(e:any)=>{
    const cardId=e.dataTransfer.getData('cardId');
    setActive(false)
    deleteTask(cardId)
    await deleteTaskApi(cardId)
  }
  return (
    <>
     
    <Card 
    onDrop={handleDragEnd}
    onDragLeave={handleDragLeave}
    onDragOver={handleDragOver}
    className={`mt-4 mb-4 h-44 shrink-0
    flex justify-center items-center rounded border text-3xl ${
      active
      ? "border-red-800 bg-red-800/20 text-red-500"
      : "border-red-500 bg-[#f9fafb] text-red-600"
    }
    `}>
      {active ? <Trash/> : <Trash className="animate-bounce" />}
      
     
    </Card></>
   
  )
}
