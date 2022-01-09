import axios from 'axios'
const baseUrl="http://localhost:5000/api/"
var people=JSON.parse(localStorage.getItem("persist:root"))
var yolo
var token
var commonPeople
if(people){
    commonPeople=people.user
    yolo=commonPeople.currentUser
    if(yolo){token=yolo.data.token}
    
     
}


//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjY3Y2M1Y2IyMzIxODI5ZDk2ZDg0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4NzI4OSwiZXhwIjoxNjM0NTQ2NDg5fQ.gBmmuChZ0wrDKjV6f9Bgq0pGmVQ84PkUuJkiVEYYiLc"
export const publicRequest=axios.create({baseURL:baseUrl})
export const userRequest=axios.create({baseURL:baseUrl,headers:{token:`Bearer ${token}` }})