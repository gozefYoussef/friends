const express = require('express');
const messages = require('../models/messages.model');
const messagesRouter = express.Router();
const {handleGetMessages,handlePostMessages} = require('../controllers/messages.controller')

messagesRouter.get('/',(req,res)=>handleGetMessages(req,res,messages))
messagesRouter.post('/',(req,res)=>handlePostMessages(req,res,messages))

module.exports = messagesRouter;