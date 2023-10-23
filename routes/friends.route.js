const express = require('express');
const friendsRouter = express.Router();
const friends = require('../models/friends.model');
const {handleDeleteFriends,handlePostFriends,handleGetFriends, handleGetFriendID} = require('../controllers/friends.controller')

friendsRouter.get('/:id',(req,res)=> handleGetFriendID(req, res, friends));
friendsRouter.get('/',(req,res)=> handleGetFriends(req, res, friends));
friendsRouter.post('/', (req,res)=> handlePostFriends(req, res, friends));
friendsRouter.delete(`/:id`, (req,res)=> handleDeleteFriends(req, res, friends)); 

module.exports = friendsRouter;