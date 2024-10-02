import { TaskType } from "../../types/TaskType";
import { getUrl } from "../getUrlApi"
import axios from "axios"


export const addTaskApi=async(task:any)=>{
    try {
        const url=getUrl();
        const response=await axios.post(`${url}/tasks.json`,task)

        //console.log(response.data)

        return response.data.name;
    } catch (error) {
        
    }
}