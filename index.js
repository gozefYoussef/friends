const friends = require('./models/friends.model');
const messages = require('./models/messages.model');

const {handleDeleteFriends,handlePostFriends,handleGetFriends, handleGetFriendID} = require('./controllers/friends.controller')
const {handleGetMessages,handlePostMessages} = require('./controllers/messages.controller')
const express = require('express');

const app = express();
const port = 3000

//Middleware
app.use(express.json());
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})
// const friendsRouter = express.Router()
////
app.get('/',(req,res)=>{ res.send("Welcome to my express project")})

app.get('/messages',(req,res)=>handleGetMessages(req,res,messages))
app.post('/messages',(req,res)=>handlePostMessages(req,res,messages))

app.get('/friends/:id',(req,res)=> handleGetFriendID(req, res, friends));
app.get('/friends',(req,res)=> handleGetFriends(req, res, friends));
app.post('/friends', (req,res)=> handlePostFriends(req, res, friends));
app.delete(`/friends/:id`, (req,res)=> handleDeleteFriends(req, res, friends)); 
  

app.listen(port,()=>{console.log(`liseten on ${port}`)})