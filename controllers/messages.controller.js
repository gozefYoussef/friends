
function handleGetMessages (req,res,messages){
    res.json(messages)
    console.log('get messages works')
}

function handlePostMessages (req,res,messages){
    const message = req.body;
    messages.push(message);
    console.log('Post messages works')
}
module.exports = {
    handleGetMessages,
    handlePostMessages
}