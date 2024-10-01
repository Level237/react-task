import { create } from "zustand";
import { TaskInterface } from "../types/TaskInterface";
import { TaskType } from "../types/TaskType";
import {v4 as uuidv4} from 'uuid';


export const TaskStore=create<TaskInterface>((set)=>({
    tasks:[],
    addTask:(title:string,description:string,priority:string,date:string)=>{
        set((state) => ({
            tasks: [
              ...state.tasks,
              {
                id: uuidv4(),
                description,
                priority,
                title,
                date,
                status:0,
              }as TaskType,
            ],
           
          }));
          
    },
    updateTask:()=>{

    },
    deleteTask:()=>{

    }
}))