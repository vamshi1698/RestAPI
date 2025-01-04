const express = require('express')
const app = express()
app.use(express.json())

let users = []

app.get('/users',(req,res)=>{
    res.status(200).json(users)
})

app.post('/users',(req,res)=>{
    const user = req.body
    users.push(user)
    res.status(201).json({message:"user created successfully"})
})

app.put('/users/:id',(req,res)=>{
    const id  = req.params.id
    const userIndex = users.findIndex(u=>u.id===id)
    if(userIndex !== -1){
        users[userIndex] = req.body
        res.json({message:"User data updated"})
    }
    else{
        res.status(404).json({error:"user not found"})
    }
})

app.delete('/users/:id',(req,res)=>{
    const id = req.params.id
    users = users.filter(u=>u.id!==id)
    res.status(200).json({message:"User deleted successfully"})
})

app.listen(3000,()=>console.log("Server is running at port 3000"))