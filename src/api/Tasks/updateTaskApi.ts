import axios from "axios"
import { getUrl } from "../getUrlApi"

export const setTaskApi=async(id:any,task:any)=>{
    const url=getUrl()
    return await axios.put(`${url}/tasks/${id}.json`,task)
}