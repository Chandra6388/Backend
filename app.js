const http  = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const mongoose = require('./App/connection/Mongodb.connection');
require('dotenv').config
const PORT=process.env.PORT || 8000;
const bodyparser = require('body-parser');
const cors = require('cors');



require('./App/Route')(app)

server.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`);
})