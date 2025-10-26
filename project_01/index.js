import express from "express";
// it is plain data file

import users from "./MOCK_DATA.json" with { type: "json" };

const app = express()
const port = 8000

app.get('/users',(req,res)=>{
  return res.json(users)
})

app.listen(port,console.log(`server is running at ${port}`))
