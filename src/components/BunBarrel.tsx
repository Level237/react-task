import React, { useState } from 'react'
import { TaskType } from '../types/TaskType'
import { Card, CardHeader } from './ui/card'
import { FireExtinguisher, Trash } from 'lucide-react'

export const BunBarrel:React.FC<{setCards:(tasks:TaskType[])=>void}>=({
    setCard
 }) =>{

  const [active,setActive]=useState(false)
  return (
    <>
     
    <Card className={`mt-4 mb-4 h-44 shrink-0
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
