import { Separator } from '../components/ui/separator'
import ListBoard from '../components/ListBoard'
import { Button } from '../components/ui/button'
import ButtonTask from '../components/ui/buttonTask'

import { TaskStatus} from '../components/Task/TaskStatus'
import { Filter } from 'lucide-react'
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
            <ButtonTask/>
            </div>
         </div>
    
    
      <div className="grid grid-cols-4 gap-4">

<div>
<TaskStatus title='Todo List' status={0} description='deploy your new project in one-click'/>
</div>
<div>
<TaskStatus title='In Progress' status={1} description='deploy your new project in one-click'/>
</div>
<div>
<TaskStatus title='In Review' status={2} description='deploy your new project in one-click'/>
</div>
<div>
<TaskStatus title='Done' status={3} description='deploy your new project in one-click'/>
</div>
    
      </div>
   </div>
    </section>
       
            
        
    </>
  )
}
