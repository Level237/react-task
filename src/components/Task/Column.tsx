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

    const filterTasks=tasks.filter((c)=>c.status===status);
    return (
        <Card className="shrink-0 mb-44">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">{title} <div className="bg-black text-white px-2 py-1 text-xs rounded-full">{filterTasks.length}</div></CardTitle>
        <CardDescription>{description}</CardDescription>
        <Separator className='mr-3'  />
      </CardHeader>
      <CardContent className='flex flex-col'>
     <div className={`h-full w-full transition-colors ${!active ? "bg-teal-200/50" : 'bg-teal-200/0'}`}>

     </div>
        <ListTask tasks={filterTasks}/>
        <DropIndicator beforeId="-1" status={status}/>
      </CardContent>
     
    </Card>
    )
}