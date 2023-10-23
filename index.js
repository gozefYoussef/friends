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
const friendsRouter = express.Router();
const messagesRouter = express.Router();

////
messagesRouter.get('/',(req,res)=>{ res.send("Welcome to my express project")})

messagesRouter.get('/',(req,res)=>handleGetMessages(req,res,messages))
messagesRouter.post('/',(req,res)=>handlePostMessages(req,res,messages))

app.use('/messages',messagesRouter)

friendsRouter.get('/:id',(req,res)=> handleGetFriendID(req, res, friends));
friendsRouter.get('/',(req,res)=> handleGetFriends(req, res, friends));
friendsRouter.post('/', (req,res)=> handlePostFriends(req, res, friends));
friendsRouter.delete(`/:id`, (req,res)=> handleDeleteFriends(req, res, friends)); 

app.use('/friends',friendsRouter);

app.listen(port,()=>{console.log(`liseten on ${port}`)})