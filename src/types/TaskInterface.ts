import { TaskType } from "./TaskType";

export interface TaskInterface{
    tasks:TaskType[],
    addTask:(title:string,description:string,priority:string,date:string)=>void,
    updateTask:()=>void,
    setCards:(tasks:TaskType[])=>void,
    deleteTask:(id:string)=>void
}