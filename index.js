const express = require("express");

const server = express();
server.use(express.json());

server.get('/', (req,res) => {
    res.sendFile(__dirname +"/index.html")
})

server.listen(8080);