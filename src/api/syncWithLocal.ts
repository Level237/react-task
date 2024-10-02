import axios from "axios";
import { getUrl } from "./getUrlApi";


export const syncWithFirebase=() =>{ 
    const url=getUrl() 

    axios.get(`${url}/tasks.json`)  
        .then(response => {  
            // Transformez les données Firebase en un tableau si nécessaire
            const firebaseTasks = response.data;
            const tasksArray = Object.keys(firebaseTasks).map(key => ({ id: key, ...firebaseTasks[key] }));  
            localStorage.setItem('tasks', JSON.stringify(tasksArray));  
        })  
        .catch(error => {  
            console.error('Error syncing with Firebase:', error);  
        });  
}  