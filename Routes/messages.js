const handleGetMessages = (req,res,messages)=>{
    res.json(messages)
    console.log('get messages works')
}

const handlePostMessages = (req,res,messages)=>{
    const message = req.body;
    messages.push(message);
    console.log('Post messages works')
}
module.exports = {
    handleGetMessages,
    handlePostMessages
}