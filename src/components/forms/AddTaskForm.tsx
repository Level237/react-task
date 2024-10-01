import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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
  import { Input } from "../../components/ui/input"
  import { Label } from "../../components/ui/label"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { DatePickerDemo } from "../ui/date"

export default function AddTaskForm() {
  return (
    <>
      <DialogContent className="sm:max-w-[469px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="">
              Title
            </Label>
            <Input
              id="name"
              placeholder="Enter your title"
              className="col-span-3"
            />
          </div>
         
          <div className="flex flex-col gap-4">
            <Label htmlFor="username" className="">
              Description
            </Label>
            <Textarea className="w-full" placeholder="Type your message here." />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center justify-between">
                    <div className="flex-1">
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
                    <div className="flex-1">
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
      </DialogContent>
    </>
  )
}
