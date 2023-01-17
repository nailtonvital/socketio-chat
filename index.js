var express = require("express")
var app = express()
var http = require("http").createServer(app)
var io= require("socket.io")(http)

io.on("connection", socket =>{
  console.log("OK");
    socket.on("disconnect", () => {
      console.log("x disconnect");
    });

    socket.on("msg",data=>{
      io.emit("showMsg",data)
    })
})

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

http.listen(3000)