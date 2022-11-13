import axios from 'axios'


// const path = require('path')
// const dotenv=require('dotenv').config()

// const baseUrl=process.env.REACT_APP_API_URL
// const otherUrl=process.env.REACT_APP_LOCAL_URL
const baseUrl = "https://jazzythings.herokuapp.com/api/"
const otherUrl = "http://localhost:5000/api/"


// console.log(require('dotenv').config())
// console.log(process.env.REACT_APP_LOCAL_URL)
var people=JSON.parse(localStorage.getItem("persist:root"))
// console.log(people)
var yolo
var token
var commonPeople
if(people){
    // console.log(people)
    yolo=people.currentUser
    // yolo=JSON.parse(commonPeople).currentUser
    
    // if(yolo!==null){
    //     console.log(yolo)
    //     token=JSON.parse(yolo).data.token
    // }
    // console.log(yolo)
    
     
}


//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjY3Y2M1Y2IyMzIxODI5ZDk2ZDg0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4NzI4OSwiZXhwIjoxNjM0NTQ2NDg5fQ.gBmmuChZ0wrDKjV6f9Bgq0pGmVQ84PkUuJkiVEYYiLc"
export const publicRequest=axios.create({baseURL:baseUrl})
export const userRequest=axios.create({baseURL:baseUrl,headers:{token:`Bearer ${token}` }})