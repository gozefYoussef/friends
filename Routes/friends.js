const handleGetFriends = (req,res,friends) =>{
    res.json(friends);
    console.log('GET /friends works');
}

const handlePostFriends = (req,res,friends) =>{
    const friend = req.body;
    friends.push(friend);
    res.status(201).json(friend);
    console.log('POST /friends works');
}

const handleDeleteFriends = (req,res,friends) =>{
    const {id} = req.params;
    const index = friends.findIndex(friend => friend.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Friend not found' });
    }
  
    friends.splice(index, 1); // Remove the friend from the array
    console.log('Friend deleted');
    res.status(200).json({ message: 'Friend deleted' });
} 

module.exports = {
handleDeleteFriends,
handleGetFriends,
handlePostFriends
}