import express from "express";
// it is plain data file

import users from "./MOCK_DATA.json" with { type: "json" };

const app = express()
const port = 8000
app.use(express.urlencoded({ extended: false }));


app
  .route("/api/users/:id")
  .get((req,res)=>{
    const id = req.params.id
  const user= users.find((user)=>user.id===id)
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  return res.json(user)
  })
  .put((req,res)=>{
    const newUser = req.body
  })
  .delete((req,resz)=>{})
  .patch((req,res)=>{})
  .post((req,res)=>{
    const body = req.body
    console.log("Body",body)
    return res.json({status:"User registered"})
  })





app.listen(port,console.log(`server is running at ${port}`))
