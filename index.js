const express = require('express');
const path = require('path')
const messagesRouter = require('./routes/messages.route')
const friendsRouter = require('./routes/friends.route')

const app = express();
const port = 3000

app.use(express.json());

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
})
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));
app.use('/site',express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{ res.render('index', {
    title: 'My Loyal Friends',
    caption: 'Let\'s go skiing!',
})})

app.use('/messages',messagesRouter);

app.use('/friends',friendsRouter);

app.listen(port,()=>{console.log(`liseten on ${port}`)})