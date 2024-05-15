const express = require('express');
const router = express.Router();
const{signin,login} = require('../controllers/user')




router.post("/login", login)
router.post("/signIn", signin)


module.exports =router