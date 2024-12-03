const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connected!")
  socket.on("id", id=> {
    socket.broadcast.emit("sendid", id)
  })
  socket.on("returnid", id=> {
    socket.broadcast.emit("otherid", id);
  })
  socket.on("move", data=> {
    socket.broadcast.emit("moved", data);
  })
});

app.use(express.static(__dirname))
server.listen(3000, () => {
  console.log('listening on *:3000');
});