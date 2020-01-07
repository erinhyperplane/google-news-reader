const express = require('express')
const app = express()
const port = 3003

app.get('/jobs',(req,res)=>{
    
    return res.send('hello world')
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))