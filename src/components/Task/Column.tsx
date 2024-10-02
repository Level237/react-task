import React from "react";
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


export const Column:React.FC<{title:string,description:string,status:number,column:string}>=({
   title,description,status,column
})=>{

    return (
        <Card className="shrink-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Separator className='mr-3'  />
      </CardHeader>
      <CardContent className='flex flex-col gap-3'>
     
        <ListTask status={status}/>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
    )
}