import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Plus } from "lucide-react"
import AddTaskForm from "../forms/AddTaskForm"

export default function ButtonTask() {
  return (
    <div>
      <Dialog>
      <DialogTrigger asChild>
      <Button className='flex gap-1 items-center' variant="default"><Plus className='w-4 h-4'/>Create Task</Button>
      </DialogTrigger>
      <AddTaskForm/>
    </Dialog>
    </div>
  )
}
