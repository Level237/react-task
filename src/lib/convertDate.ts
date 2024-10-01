
export const convertDateToString=(date:any)=>{
    const mydate = new Date(date);
    const month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "Oct", "November", "December"][mydate.getMonth()];
const str = mydate.getDate() +' ' +month + ' ' + mydate.getFullYear();
      
    return str;
}