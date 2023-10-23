const express = require('express');
const path = require('path')
const messagesRouter = require('./routes/messages.route')
const friendsRouter = require('./routes/friends.route')

const app = express();
const port = 3000

app.use(express.json());
app.use('site',express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
})
app.get('/',(req,res)=>{ res.send("Welcome to my express project")})


app.use('/messages',messagesRouter)

app.use('/friends',friendsRouter);

app.listen(port,()=>{console.log(`liseten on ${port}`)})