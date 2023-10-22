// const http = require('http')
const {handleDeleteFriends,handlePostFriends,handleGetFriends, handleGetFriendID} = require('./Routes/friends')
const {handleGetMessages,handlePostMessages} = require('./Routes/messages')
const express = require('express');

const app = express();
const port = 3000

app.use(express.json());

let messages = [
    {id: 10,name: "Tito",},
    {id:11,name: 'jozza',}
]
let friends = [
    {id: 1, name: 'Sir Issac Newton'},
    {id:2, name: 'Sir Joseph Atef'}
]

app.get('/',(req,res)=>{ res.send("Welcome to my express project")})

app.get('/messages',(req,res)=>handleGetMessages(req,res,messages))
app.post('/messages',(req,res)=>handlePostMessages(req,res,messages))

app.get('/friends/:id',(req,res)=> handleGetFriendID(req, res, friends));
app.get('/friends',(req,res)=> handleGetFriends(req, res, friends));
app.post('/friends', (req,res)=> handlePostFriends(req, res, friends));
app.delete(`/friends/:id`, (req,res)=> handleDeleteFriends(req, res, friends)); 
  

app.listen(port,()=>{console.log(`liseten on ${port}`)})
