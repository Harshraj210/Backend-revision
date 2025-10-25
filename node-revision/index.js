const http = require('http')
const myServer = http.createServer((req,res)=>{
  console.log("recieve req.")
  res.end("Server end")
})
myServer.listen(8000,()=>console.log("server started at port 8000"))