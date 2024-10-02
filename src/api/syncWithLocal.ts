import axios from "axios";
import { getUrl } from "./getUrlApi";


export const syncWithFirebase=() =>{ 
    const url=getUrl() 

    axios.get(`${url}/tasks.json`)  
        .then(response => {  
            // Transformez les données Firebase en un tableau si nécessaire
            const taskArray=[]
            for(const key in response.data){
                const taskObj={
                    id:key,
                    title:response.data[key].title,
                    description:response.data[key].description,
                    date:response.data[key].date,
                    priority:response.data[key].priority,
                    isComplete:response.data[key].isComplete,
                    column:response.data[key].column
                };
                taskArray.push(taskObj)
                localStorage.setItem('tasks', JSON.stringify(taskArray));
            }
            
            
        })  
        .catch(error => {  
            console.error('Error syncing with Firebase:', error);  
        });  
}  