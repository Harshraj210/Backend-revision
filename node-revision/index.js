const http = require('http')
const myServer = http.createServer((req,res)=>{
  console.log("recieve req.")
  res.end("Hello from server")
})
const port = 8000
myServer.listen(port,()=>console.log(`server started at port ${port}`))