import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"
import { ListTask } from "./ListTask";
import { Separator } from "../ui/separator";
import { TaskType } from "../../types/TaskType";
import { DropIndicator } from "../DropIndicator";


export const Column:React.FC<{title:string,description:string,status:number,column:string,tasks:TaskType[],
setCards:(tasks:TaskType[])=>void
}>=({
   title,description,status,column,tasks,setCards
})=>{
    const [active,setActive]=useState(false)

    const filterTasks=tasks.filter((c)=>c.column===column);

    const getIndicators=()=>{
      return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
    }

    const getNearestIndicator=(e:any,indicators:any)=>{

      const DISTANCE_OFFSET=50;
      const el=indicators.reduce(
        (closest:any,child:any)=>{
          const box=child.getBoundingClientRect();
          const offset=e.clientY - (box.top + DISTANCE_OFFSET);

          if(offset < 0 && offset > closest.offset){
            return {offset:offset,element:child}
          }else{
            return closest;
          }
        },{
          offset:Number.NEGATIVE_INFINITY,
          element:indicators[indicators.length - 1]
        }
      )

      return el;
    }

    const clearHighlights=(els:any=0)=>{
      const indicators=els || getIndicators();

      indicators.forEach((i:any)=>{
        i.style.opacity="0";
      })
    }
    const highlightIndicator=(e:any)=>{
      const indicators=getIndicators();
      clearHighlights(indicators)
      const el=getNearestIndicator(e,indicators)
     el.element.style.opacity="1"
    }
    const handleDragHover=(e:any)=>{
      e.preventDefault();
      highlightIndicator(e);
      setActive(true)
    }
    const handleDragStart=(e:any,card:TaskType)=>{
      e.dataTransfer.setData("cardId",card.id)
    }
    const handleDragLeave=()=>{
      setActive(false)
      clearHighlights()
    }
    const handleDragEnd=(e:any)=>{
      
      setActive(false)
      clearHighlights()
    }
    return (
        <Card 
        onDrop={handleDragEnd}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragHover} className={`shrink-0 mb-44 transition-colors ${active ? "bg-teal-200/50 h-full" : 'bg-teal-200/0 '}`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">{title} <div className="bg-black text-white px-2 py-1 text-xs rounded-full">{filterTasks.length}</div></CardTitle>
        <CardDescription>{description}</CardDescription>
        <Separator className='mr-3'  />
      </CardHeader>
      <CardContent className='flex flex-col'>
     <div 
     
     className={`h-full w-full transition-colors ${!active ? "bg-teal-200/50" : 'bg-teal-200/0'}`}>

     </div>
        <ListTask handleDragStart={handleDragStart}  tasks={filterTasks}/>
        <DropIndicator beforeId="-1" column={column}/>
      </CardContent>
     
    </Card>
    )
}