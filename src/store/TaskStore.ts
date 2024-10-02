import { create } from "zustand";
import { TaskInterface } from "../types/TaskInterface";
import { TaskType } from "../types/TaskType";
import {v4 as uuidv4} from 'uuid';


export const TaskStore=create<TaskInterface>((set)=>({
    tasks:JSON.parse(localStorage.getItem('tasks') || '[]') as TaskType[],
    addTask:(title:string,description:string,priority:string,date:string)=>{
        set((state) => {
          
            const newTasks=[...state.tasks,{
              id:uuidv4(),
              title:title,
              description:description,
              priority:priority,
              date:date,
              status:0
            }]
            localStorage.setItem('tasks',JSON.stringify(newTasks))
            return {tasks:newTasks}
            
          });
        
    },
    updateTask:()=>{

    },
    setCards:(newTasks:TaskType[])=>{
      set((state)=>{
        //const taskIndex=state.tasks.findIndex(obj=>obj.id===id)
        //state.tasks[taskIndex].status=status;
        newTasks=[...state.tasks]

        localStorage.setItem('tasks',JSON.stringify(newTasks))
        return {tasks:newTasks}
      })
    },
    deleteTask:(id:string)=>{
      set((state) => {
        const newTasks= state.tasks.filter((todo) => todo.id !== id);
          localStorage.setItem('tasks',JSON.stringify(newTasks))
          return {tasks:newTasks}
      });
    }
}))