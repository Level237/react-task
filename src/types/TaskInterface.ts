import { TaskType } from "./TaskType";

export interface TaskInterface{
    tasks:TaskType[],
    addTask:()=>void,
    updateTask:()=>void,
    deleteTask:()=>void
}