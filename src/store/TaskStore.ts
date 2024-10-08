import { create } from "zustand";
import { TaskInterface } from "../types/TaskInterface";
import { TaskType } from '../types/TaskType';
import { syncWithFirebase } from "../api/syncWithLocal";


export const TaskStore=create<TaskInterface>((set)=>({
  
    tasks:JSON.parse(localStorage.getItem('tasks')  || '[]') as TaskType[],
    tasksResult:[],
    addTask:(id:string,title:string,description:string,priority:string,date:string)=>{
        set((state) => {
          
          const taskObject={
            id:id,
            title:title,
            description:description,
            priority:priority,
            date:date,
            isComplete:false,
            column:"todo"
          }
            const newTasks=[...state.tasks,taskObject]
            
            

            localStorage.setItem('tasks',JSON.stringify(newTasks))
            return {tasks:newTasks}
            
          });
        
    },
    updateTask:(id:string,task:TaskType)=>{
      set((state)=>{
        const newTasks=state.tasks.filter((taskItem)=>taskItem.id !==id)
        newTasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(newTasks))
            return {tasks:newTasks}
      })
      
    },
    setCards:(newTasks:TaskType[])=>{
      set((state)=>{
        //const taskIndex=state.tasks.findIndex(obj=>obj.id===id)
        //state.tasks[taskIndex].status=status;
        state.tasks=[...newTasks]
        console.log(syncWithFirebase())
        localStorage.setItem('tasks',JSON.stringify(newTasks))
        console.log(newTasks)
        return {tasks:state.tasks}
      })
    },
    deleteTask:(id:string)=>{
      set((state) => {
        const newTasks= state.tasks.filter((todo) => todo.id !== id);
          localStorage.setItem('tasks',JSON.stringify(newTasks))
          return {tasks:newTasks}
      });
    },
    searchTask:(query:string)=>{
      set((state) => {
        const newTasks= state.tasks.filter((todo) => todo.title == query);
          //localStorage.setItem('tasks',JSON.stringify(newTasks))
          console.log(newTasks)
          return {tasksResult:newTasks}
      });
    }
}))