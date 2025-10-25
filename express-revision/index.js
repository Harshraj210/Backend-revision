import express from "express";


const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send("welcome to home page")
})
app.get('/about',(req,res)=>{
  res.send("This is Harsh")
})
app.listen(port,()=>{
  console.log(`server is running at port ${port}`)
})