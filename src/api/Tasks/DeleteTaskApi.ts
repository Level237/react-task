import axios from "axios"
import { getUrl } from "../getUrlApi"
import { TaskType } from "../../types/TaskType"

export const deleteTaskApi=async(id:any)=>{

    const url=getUrl()
    await axios.delete(`${url}/tasks/${id}.json`)
}