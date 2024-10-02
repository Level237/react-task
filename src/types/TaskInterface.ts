import { TaskType } from "./TaskType";

export interface TaskInterface{
    tasks:TaskType[],
    addTask:(id:string,title:string,description:string,priority:string,date:string)=>void,
    updateTask:()=>void,
    setCards:(tasks:TaskType[])=>void,
    deleteTask:(id:string)=>void
}