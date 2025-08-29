import express from "express"
import { prisma } from "@repo/db/client"

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
   prisma.user.findMany({
   })
   .then(users => res.json(users))
   .catch(err => res.status(500).json({error:err.message}

   ))
})

app.post("/",(req,res)=>{
    const {username , password} = req.body

    if(!username || !password){
        res.status(400).json({
            message : "data not found"
        })
    }

    prisma.user.create({
        data:{
            username : username,
            password : password
        }
    })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
    
})

app.listen(3001, ()=>{
    console.log("server started at 3000")
})