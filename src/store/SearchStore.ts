import { create } from "zustand";
import { TaskInterface } from "../types/TaskInterface";
import { TaskType } from '../types/TaskType';
import { syncWithFirebase } from "../api/syncWithLocal";
import { SearchInterface } from "../types/SearchInterface";


export const SearchStore=create<SearchInterface>((set)=>({
  
    search:"",
    setSearch:(query:string)=>{
        set({search:query})
        console.log(query)
        }
   
}))