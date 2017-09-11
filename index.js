const express = require("express");
const app = express();
var http = require("http").Server(app);
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
//db
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var connection = mongoose.createConnection(
  "mongodb://herrtopi:herrtopi@ds133054.mlab.com:33054/iris69"
);

Schema = mongoose.Schema;

var messageSchema = new Schema({
  from: String,
  message: String,
  time: Number
});
var message = connection.model("message", messageSchema);
//db

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
var users = {
  HerrTopi: "",
  Greenie: ""
};
app.post("/", (req, res) => {
  if (req.body.username == "HerrTopi" && req.body.password == "admin") {
    users.HerrTopi = req.headers["x-real-ip"] || req.connection.remoteAddress;
    res.sendFile(path.join(__dirname, "/public", "index.html"));
    return;
  } else if (req.body.username == "Greenie" && req.body.password == "admin") {
    users.Greenie = req.headers["x-real-ip"] || req.connection.remoteAddress;
    res.sendFile(path.join(__dirname, "/public", "index.html"));
    return;
  }
  res.sendFile(path.join(__dirname, "/public", "login.html"));
  return;
});
app.get("/messages", (req, res) => {
  message.find(function(err, messages) {
    res.json(messages);
  });
});
app.get("/delete_all_messages", (req, res) => {
  message.remove({}, function(err, messages) {
    res.json(messages);
  });
});
app.get("/", (req, res) => {
  var uerel = req.headers["x-real-ip"] || req.connection.remoteAddress;
  if (users.HerrTopi != "" && users.HerrTopi == uerel) {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
    return;
  }
  if (users.Greenie != "" && users.Greenie == uerel) {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
    return;
  }
  res.sendFile(path.join(__dirname, "/public", "login.html"));
  return;
});
app.use(express.static("public"));

//app.use("/messages", messages);
/** 
{
from:"",
message:"",
time:1234567
} 
*/
var getuser = socket => {
  for (var key in users) {
    if (users[key] == socket.handshake.address) {
      return key;
    }
  }
  return null;
};
var lastMessenger = "";
io.on("connection", function(socket) {
  socket.emit("test", {
    users: users,
    handshake: socket.handshake.address
  });
  if (users.HerrTopi == socket.handshake.address) {
    socket.emit("user", "HerrTopi");
  } else if (users.Greenie == socket.handshake.address) {
    socket.emit("user", "Greenie");
  } else {
    socket.disconnect();
  }
  //console.log(io.sockets.clients());
  message.find(function(err, messages) {
    socket.emit("messageThread", messages);
  });

  socket.on("message", function(msg) {
    lastMessenger = getuser(socket);
    io.sockets.emit("message", {
      from: getuser(socket),
      message: msg,
      time: Date.now()
    });
    var newMessage = new message({
      from: getuser(socket),
      message: msg,
      time: Date.now()
    });
    newMessage.save(function(err) {
      console.log(err, "okok");
    });
  });
  socket.on("typing", function(typing) {
    socket.broadcast.emit("typing", typing);
    //console.log("typing: ");
  });
  socket.on("seen", function(seen) {
    if (lastMessenger != getuser(socket)) {
      socket.broadcast.emit("seen", seen);
    }
    //console.log("seen: " + seen);
  });
});
//listen
http.listen(process.env.PORT || 3000, function() {
  console.log("Listening on :" + (process.env.PORT || 3000));
});
