// const http = require('http')
const {handleDeleteFriends,handlePostFriends,handleGetFriends} = require('./Routes/friends')
const express = require('express');
const app = express();

app.use(express.json());

let messages = [{
    id: 10,
    name: "Tito",
},{
    id:11,
    name: 'jozza',
}]
let friends = [
    {id: 1, name: 'Sir Issac Newton'},
    {id:2, name: 'Sir Joseph Atef'}
]

app.get('/',(req,res)=>{
        res.send("Welcome to my express project")
        console.log('get / works')

    })

    app.get('/messages',(req,res)=>{
    res.json(messages)
    console.log('get messages works')
})


app.post('/messages',(req,res)=>{
    const message = req.body;
    messages.push(message);
    console.log('Post messages works')
})

app.get('/friends',(req,res)=> handleGetFriends(req, res, friends));
app.post('/friends', (req,res)=> handlePostFriends(req, res, friends));
app.delete(`/friends/:id`, (req,res)=> handleDeleteFriends(req, res, friends)); 
  

const port = 3000
app.listen(port,()=>{
    console.log(`liseten on ${port}`)
})

// server.on('request',(req,res)=>{
//     // localhost:3000/friends/1
//     const items = req.url.split('/');
    //  res.writeHead(200,{
    //      'Content-Type': 'application/json'
    //  });
    // if(req.url === '/'){
    //     res.setHeader(
    //         'Content-Type','text/plain'
    //     )
    //     res.write('Hello it works on browser')
    //     res.end();
    // }

// if(req.method === 'POST' && items[1] === 'friends'){
    //    req.on('data', data =>{
    //     const friend = data.toString();
    //     console.log(friend)
    //     friends.push(JSON.parse(friend))
    //    })
    // }
//     else if(req.method === 'GET' && items[1] === 'friends'){
//         res.setHeader('Content-Type','application/json')
//         res.statusCode=200;
//         if(items.length === 3){
//             const index = items[2];
//             res.end(JSON.stringify(friends[index]))
//         }else{
//             res.end(JSON.stringify(friends))
//         }
//         }
//     else if(req.method === 'GET' && items[1] === 'messages'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<body>');
//         res.write('<ul>');
//         res.write('<li>Tell me what you see ?</li>');
//         res.write('<li>Someone</li>');
//         res.write('</ul>');
//         res.write('</body>');
//         res.write('</html>');
//         res.end();
//     }else{
//         res.statusCode= 404;
//         res.setHeader('Content-Type','text/plain')
//         res.end();
//     }
// });
// const server = http.createServer();
