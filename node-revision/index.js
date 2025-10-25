const http = require('http')
const myServer = http.createServer((req,res)=>{
  const log= req.url
  switch(log){
    case '/' : res.end("homepage")
    break;
    case '/about' : res.end("This is harsh")
    break;
  }
  res.end("Hello from server")
})
const port = 8000
myServer.listen(port,()=>console.log(`server started at port ${port}`))