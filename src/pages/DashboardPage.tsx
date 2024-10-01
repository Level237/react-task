import React from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import { Separator } from '../components/ui/separator'
import ListBoard from '../components/ListBoard'
import { Button } from '../components/ui/button'
import { Filter, Plus } from 'lucide-react'

export default function DashboardPage() {
  return (
    <>
    <section>
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      
         <div className="flex gap-3 mb-4 px-3 py-2 border border-[#00000018] justify-between rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-row flex-2 gap-4">
            <div className='flex flex-col'>
                <h2 className='text-black font-bold'>October</h2>
                <span className='text-sm text-gray-500'>Today is Satuday,Oct 01,2024</span>
           </div>
           <Separator orientation="vertical" />
            </div>
           
           <div className="flex items-center flex-1 flex-row justify-between">
            <h2 className='text-black text-lg font-bold'>Board</h2>
            <ListBoard/>
           </div>
            <div className='flex gap-2 items-center w-64'>
            <Separator className='mr-3' orientation="vertical" />
            <Button className='flex gap-1 items-center' variant="outline"><Filter className='w-4 h-4'/>Filters</Button>
            <Button className='flex gap-1 items-center' variant="default"><Plus className='w-4 h-4'/>Create Task</Button>
            </div>
         </div>
    
    
      <div className="grid grid-cols-3 gap-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
   </div>
    </section>
       
            
        
    </>
  )
}
