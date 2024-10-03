import React from 'react'
import { BunBarrel } from './BunBarrel'
import { TaskStore } from '../store/TaskStore'

export default function Sidebar() {
   const setCards=TaskStore((state)=>state.setCards)
   const tasks=TaskStore((state)=>state.tasks)
  return (
    <>
      
   
      <div className="h-[100vh] w-64 px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex gap-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span className="ms-3">Tasks</span>
               <div className="bg-red-700 text-white px-2 py-1 text-xs rounded-full">{tasks.length} in progress</div>
            </a>
         </li>
       
        
        
      </ul>
      <div>
         <BunBarrel setCards={setCards}/>
      </div>
      <div className='mt-24'>
         <img className='h-44' src="https://blush.design/api/download?shareUri=CvOUSSxZUO3nothA&c=Hair_0%7E3d3027-0.1%7E7590ff_Skin_0%7E715b4c-0.1%7Ec09671&w=800&h=800&fm=png" alt="" />
      </div>
   </div>




    </>
  )
}
