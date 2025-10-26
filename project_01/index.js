import express from "express";
// it is plain data file

import users from "./MOCK_DATA.json" with { type: "json" };

const app = express()
const port = 8000

app.get('/api/users',(req,res)=>{
  return res.json(users)
})
app.get('/api/users/:id',(req,res)=>{
 
  const id = req.params.id
  const user= users.find((user)=>user.id===id)
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  return res.json(user)
})

app.listen(port,console.log(`server is running at ${port}`))
