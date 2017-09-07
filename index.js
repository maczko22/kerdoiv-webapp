const express = require("express");
const app = express();
var http = require("http").Server(app);

var io = require("socket.io")(http);

//var mongodb = require('mongodb');
//var mongoose = require('mongoose');

//var messages = require('./public/js/messages');

//react hot reload
if (process.env.NODE_ENV != "production") {
  const config = require("./webpack.config.dev.js");
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static("public"));

//app.use("/messages", messages);
/** 
{
from:"",
message:"",
time:1234567
} 
*/
var messageThread = [
  {
    from: "",
    message: "Boldog Szülinapot!"
  }
];

io.on("connection", function(socket) {
  console.log(io.sockets.clients());
  socket.emit("messageThread", messageThread);
  socket.on("message", function(msg) {
    io.sockets.emit("message", {
      from: "",
      message: msg,
      time: Date()
    });
    messageThread.push({
      from: "",
      message: msg,
      time: Date()
    });
  });
  socket.on("typing", function(typing) {
    socket.broadcast.emit("typing", typing);
    console.log("typing: ");
  });
  socket.on("seen", function(seen) {
    socket.broadcast.emit("seen", seen);
    console.log("seen: " + seen);
  });
});
//listen
http.listen(process.env.PORT || 3000, function() {
  console.log("Listening on :" + (process.env.PORT || 3000));
});
