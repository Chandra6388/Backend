const route = require('express').Router();
const {Login} =require('../../controller/Auth/Auth.controller')

//Login
route.post('/login',Login)

module.exports = route;