import React from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import { Separator } from '../components/ui/separator'
import ListBoard from '../components/ListBoard'
import { Button } from '../components/ui/button'
import { DotIcon, Filter, MoreHorizontal, Plus } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { CardTask } from '../components/ui/cardTask'
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
    
    
      <div className="grid grid-cols-4 gap-4">

<div>
<Card className="">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-3'>

        <CardTask bgTask='#1271ff41' 
        title='Move down'
        color="#1271ff" 
        content='Manage men sevent game,let me down,let me see you please'
        status='urgent'

        />
      
      <CardTask bgTask='#1271ff41' 
        title='Move down'
        color="#1271ff" 
        content='Manage men sevent game,let me down,let me see you please'
        status='urgent'

        />

      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
</div>
<div>
<Card className="">
      <CardHeader>
        <CardTitle>In Progress</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-3'>
      <CardTask bgTask='#d7790660' 
        title='Move down'
        color="#d77906" 
        content='Manage men sevent game,let me down,let me see you please'
        status='urgent'

        />
        <CardTask bgTask='#11111179' 
        title='Move down'
        color="#d77906" 
        content='Manage men sevent game,let me down,let me see you please'
        status='urgent'

        />
        
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
</div>
<div>
<Card className="">
      <CardHeader>
        <CardTitle>In Review</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
</div>
<div>
<Card className="">
      <CardHeader>
        <CardTitle>Done</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
</div>
    
      </div>
   </div>
    </section>
       
            
        
    </>
  )
}
