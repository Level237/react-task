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
import { DatePickerDemo } from "../ui/date"
import useForm from "../../hooks/use-form"
import { convertDateToString } from "../../lib/convertDate"
import { useState } from "react"

export default function AddTaskForm() {

  const [date,setDate]=useState("")
  const {
    value:enterTitle,
    hasError:titleError,
    valueHandler:enteredTitleHandler,
    blurHandler:blurTitleHandler,
    reset:resetTitle,
    valueIsValid:titleIsvalid
  }=useForm((value:any)=>value.trim()!=="")

  const {
    value:enterDescription,
    hasError:descriptionError,
    valueHandler:enteredDescriptionHandler,
    blurHandler:blurDescriptionHandler,
    reset:resetDescription,
    valueIsValid:descriptionIsvalid
  }=useForm((value:any)=>value.trim()!=="")

  const {
    value:enterPriority,
    hasError:priorityError,
    valueHandler:enteredPriorityHandler,
    blurHandler:blurPriorityHandler,
    reset:resetPriority,
    valueIsValid:priorityIsvalid
  }=useForm((value:any)=>value.trim()!=="")


  const getDate=(date:any)=>{
    const dateConvert=convertDateToString(date)

    setDate(dateConvert)
  }


  const submitFormHandler=(event:any)=>{
    event.preventDefault()
    if(!titleIsvalid && !descriptionIsvalid  && !priorityIsvalid){
      return;
    }
    resetTitle()
    resetDescription()
    resetPriority()
  }
  
  let formIsValid=false;

  if(titleIsvalid && descriptionIsvalid && priorityIsvalid){
    formIsValid=true;
  }

  const validClassTitle=titleError ? "border border-red-400" : ""
  const validClassDescription=descriptionError ? "border border-red-400" : ""
  const validClassPriority=priorityError ? "border border-red-400" : ""
  return (
    <>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
         
        </DialogHeader>
        <form onSubmit={submitFormHandler}>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="">
              Title
            </Label>
            <Input
              id="name"
              onBlur={blurTitleHandler} 
              onChange={enteredTitleHandler} 
              value={enterTitle} 
              placeholder="Enter your title"
              className={`col-span-3 ${validClassTitle}`}
            />
            {titleError && <p className="text-xs mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
          </div>
         
          <div className="flex flex-col gap-4">
            <Label htmlFor="username" className="">
              Description
            </Label>
            <Textarea className={`w-full ${validClassDescription}`} placeholder="Type your message here."
            onBlur={blurDescriptionHandler} 
            onChange={enteredDescriptionHandler} 
            value={enterDescription} 
            />
            {descriptionError && <p className="text-xs mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex mt-3 gap-3 items-center justify-between">
                    <div className="flex-1 flex flex-col gap-3">
                    <Label htmlFor="username" className="">
              Priority
            </Label>
            <select 
            onBlur={blurPriorityHandler} 
            onChange={enteredPriorityHandler} 
            value={enterPriority}
            className={`${validClassPriority} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
    <option selected>Choose a priority</option>
    <option value="0">urgent</option>
    <option value="1">Not urgent</option>

   
          </select>
          {priorityError && <p className="text-xs mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
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
          <Button disabled={!formIsValid} type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </>
  )
}
