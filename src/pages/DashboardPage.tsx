import { Separator } from '../components/ui/separator'
import ListBoard from '../components/ListBoard'
import { Button } from '../components/ui/button'
import ButtonTask from '../components/ui/buttonTask'
import { Filter } from 'lucide-react'
import Board from '../components/Task/Board'
import { SearchStore } from '../store/SearchStore'
import React from 'react'

import { TaskStore } from '../store/TaskStore'
import { ResultSearch } from '../components/Task/ResultSearch'
export default function DashColumnPage() {

  const search=SearchStore((set)=>set.search)
  let ContentPage:React.ReactNode


  if(search.length===0){
    ContentPage= <section>
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
            <ButtonTask/>
            </div>
         </div>
    
    
      <Board/>
   </div>
    </section>
  }else{
    ContentPage=<ResultSearch/>
  }
  

  return ContentPage;
}
