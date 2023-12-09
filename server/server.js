const path = require("path");
const http = require("http");
const express = require("express");
const socket = require("socket.io");

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let oi = socketIO(server);

app.use(express.static(publicPath));

server.listen(3000, () => {
  console.log(`Server Çalışıyor Port: ${port}`);
});
