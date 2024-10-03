import React from 'react'
import { BunBarrel } from './BunBarrel'
import { TaskStore } from '../store/TaskStore'

export default function Sidebar() {
   const setCards=TaskStore((state)=>state.setCards)
  return (
    <>
      
   
      <div className="h-[100vh] w-64 px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span className="ms-3">Tasks</span>
            </a>
         </li>
       
        
        
      </ul>
      <div>
         <BunBarrel setCards={setCards}/>
      </div>
   </div>




    </>
  )
}
