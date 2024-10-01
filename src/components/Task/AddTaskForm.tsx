import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "../ui/dialog"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../ui/select"
  import { Input } from "../ui/input"
  import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { DatePickerDemo } from "../ui/date"
import useForm from "../../hooks/use-form"

export default function AddTaskForm() {

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


  const submitFormHandler=(event:any)=>{
    event.preventDefault()
    if(!titleIsvalid && !descriptionIsvalid){
      return;
    }
    resetTitle()
    resetDescription()
  }
  
  let formIsValid=false;

  if(titleIsvalid && descriptionIsvalid){
    formIsValid=true;
  }

  const validClassTitle=titleError ? "border border-red-400" : ""
  const validClassDescription=descriptionError ? "border border-red-400" : ""
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
            <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder=" Select a priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="urgent">Urgent</SelectItem>
          <SelectItem value="not urgent">Not Urgent</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                    <Label htmlFor="name" className="">
              Select a date
            </Label>
                        <DatePickerDemo/>
                    </div>
            </div>
           
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </>
  )
}
