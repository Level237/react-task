import { create } from "zustand";
import { TaskInterface } from "../types/TaskInterface";


export const TaskStore=create<TaskInterface>((set)=>({
    tasks:[],
    addTask:()=>{

    },
    updateTask:()=>{

    },
    deleteTask:()=>{
        
    }
}))