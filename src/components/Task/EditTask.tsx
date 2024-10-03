import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "../ui/dialog"
  
  import { Input } from "../ui/input"
  import { Label } from "../ui/label"
  import { Button } from "../ui/button"
  import { Textarea } from "../ui/textarea"

  import { convertDateToString } from "../../lib/convertDate"
  import { useState } from "react"
  import { TaskStore } from "../../store/TaskStore"
import { setTaskApi } from "../../api/Tasks/updateTaskApi"
import { DatePickerDemo } from "../ui/date"

  export const  EditTask:React.FC<{ id:string,title:string,description:string,column:string,priority:string,dates:string,isComplete:boolean }>=({
    id,title,description,column,priority,dates,isComplete
 }) =>{

    const updateTask=TaskStore((state)=>state.updateTask)
const [error,setError]=useState("")
const [isSubmitting,setIsSubmitting]=useState(false)
const [date,setDate]=useState("")
const [titleForm,setTitleForm]=useState(title)
const [descriptionForm,setDescriptionForm]=useState(description)
const [priorityForm,setPriorityForm]=useState(priority)

const getDate=(date:any)=>{
    const dateConvert=convertDateToString(date)
  
    setDate(dateConvert)
  }
  
  
  const submitFormHandler=async(event:any)=>{
    event.preventDefault()
    if(titleForm.length===0 && descriptionForm.length===0  && priorityForm.length===0){
      return;
    }
    setIsSubmitting(true)
    try {
      const response=await setTaskApi(id,{title:titleForm,description:descriptionForm,priority:priorityForm,date:date});
        if(response.data){
          setError("")
          updateTask(id,{id:id,title:titleForm,description:descriptionForm,priority:priorityForm,date:dates,column:column,isComplete:isComplete})
          setIsSubmitting(false)
        }else{
          setError("erreur verifier que vous etes connecter à internet");
        }
      
    } catch (error:any) {
      setError(error)
    }
  

  }
  

  return (
    <DialogContent className="sm:max-w-[480px]">
      <DialogHeader>
        <DialogTitle>Edit Task </DialogTitle>
       
      </DialogHeader>

      
      <form onSubmit={submitFormHandler}>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-4">
          {error && <p className="bg-red-500 text-white p-2 text-sm rounded-md">{error}</p>}
          <Label htmlFor="name" className="">
            Title
          </Label>
          <Input
            id="name"
            onChange={(e)=>setTitleForm(e.target.value)} 
            value={titleForm}
            placeholder="Enter your title"
            className={`col-span-3`}
          />
        </div>
       
        <div className="flex flex-col gap-4">
          <Label htmlFor="username" className="">
            Description
          </Label>
          <Textarea className={`w-full `} placeholder="Type your message here."
         
          onChange={(e)=>setDescriptionForm(e.target.value)} 
          value={descriptionForm} 
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex mt-3 gap-3 items-center justify-between">
                  <div className="flex-1 flex flex-col gap-3">
                  <Label htmlFor="username" className="">
            Priority
          </Label>
          <select 
          onChange={(e)=>setPriorityForm(e.target.value)}
          value={priorityForm}
          className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
  <option selected>Choose a priority</option>
  <option value="urgent">urgent</option>
  <option value="non urgent">Not urgent</option>

 
        </select>

                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                  <Label htmlFor="name" className="">
            Select a date
          </Label>
                      <DatePickerDemo getDate={getDate}/>
                  </div>
          </div>
         
        </div>
      </div>
      <DialogFooter>
        <Button  type="submit">{isSubmitting ? 'Submitting...' : 'Update'}</Button>
      </DialogFooter>
      </form>
    </DialogContent>
  )
}
