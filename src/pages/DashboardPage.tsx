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
      <div className='w-full flex flex-col  rounded-md px-3 py-4 bg-[#1271ff41]'>
        <div className='flex mb-3 items-center justify-between'>
            <div className='px-2 rounded-lg  bg-[#1271ff]'>
                <h2 className='text-xs text-white'>Urgent</h2>
                
            </div>
            <div>
            <MoreHorizontal className='w-4 h-4 text-[#1271ff]'/>
            </div>
        </div>
    <h2 className='text-lg text-[#1271ff] font-bold'>Move down</h2>
    <div>
        <span className='text-[#1271ff] line-clamp-3 mt-2 text-xs'>Manage men sevent game,let me down,let me see you please</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className='px-2 rounded-lg border border-[#1271ff]  bg-transparent'>
                <h2 className='text-xs text-[#1271ff]'>12 oct 2024</h2>
                
            </div>
        </div>
        </div>
        <div className='w-full flex flex-col  rounded-md px-3 py-4 bg-[#1271ff41]'>
        <div className='flex mb-3 items-center justify-between'>
            <div className='px-2 rounded-lg  bg-[#1271ff]'>
                <h2 className='text-xs text-white'>Urgent</h2>
                
            </div>
            <div>
            <MoreHorizontal className='w-4 h-4 text-[#1271ff]'/>
            </div>
        </div>
    <h2 className='text-lg text-[#1271ff] font-bold'>Move down</h2>
    <div>
        <span className='text-[#1271ff] line-clamp-3 mt-2 text-xs'>Manage men sevent game,let me down,let me see you please</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className='px-2 rounded-lg border border-[#1271ff]  bg-transparent'>
                <h2 className='text-xs text-[#1271ff]'>12 oct 2024</h2>
                
            </div>
        </div>
        </div>

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
      <div className='w-full flex flex-col  rounded-md px-3 py-4 bg-[#d7790660]'>
        <div className='flex mb-3 items-center justify-between'>
            <div className='px-2 rounded-lg  bg-[#d77906]'>
                <h2 className='text-xs text-white'>Urgent</h2>
                
            </div>
            <div>
            <MoreHorizontal className='w-4 h-4 text-[#d77906]'/>
            </div>
        </div>
    <h2 className='text-lg text-[#d77906] font-bold'>Move down</h2>
    <div>
        <span className='text-[#d77906] line-clamp-3 mt-2 text-xs'>Manage men sevent game,let me down,let me see you please</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className='px-2 rounded-lg border border-[#d77906]  bg-transparent'>
                <h2 className='text-xs text-[#d77906]'>12 oct 2024</h2>
                
            </div>
        </div>
        </div>
        <div className='w-full flex flex-col  rounded-md px-3 py-4 bg-[#1271ff41]'>
        <div className='flex mb-3 items-center justify-between'>
            <div className='px-2 rounded-lg  bg-[#1271ff]'>
                <h2 className='text-xs text-white'>Urgent</h2>
                
            </div>
            <div>
            <MoreHorizontal className='w-4 h-4 text-[#1271ff]'/>
            </div>
        </div>
    <h2 className='text-lg text-[#1271ff] font-bold'>Move down</h2>
    <div>
        <span className='text-[#1271ff] line-clamp-3 mt-2 text-xs'>Manage men sevent game,let me down,let me see you please</span>
        </div>
        <div className='flex justify-end mt-3'>
        <div className='px-2 rounded-lg border border-[#1271ff]  bg-transparent'>
                <h2 className='text-xs text-[#1271ff]'>12 oct 2024</h2>
                
            </div>
        </div>
        </div>
        
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
