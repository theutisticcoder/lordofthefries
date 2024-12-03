const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
  socket.on("id", id=> {
    socket.broadcast.emit("sendid", id)
  })
  socket.on("returnid", ()=> {
    socket.emit("otherid", id);
  })
  socket.on("move", data=> {
    socket.broadcast.emit("moved", data);
  })
});

httpServer.listen(3000);