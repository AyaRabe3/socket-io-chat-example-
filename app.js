const express=require('express');
const app=express();
const http=require('http');
const server =http.createServer(app);   // this server part to integrate with nodejs by http (http server)
const { Server } = require("socket.io"); // part to use module of liberary socketio  
const io = new Server(server);  // create new instance of socketio and pass the http server 

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+'/index.html')
}
)

io.on('connection',(socket)=>{
    console.log("any change from sokect connection")
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
    // socket.on('disconnect',()=>{
    //     console.log("socket disconnected");
    // })
}) //this is a connection

server.listen(3000,()=>console.log("connected to server successfully"))