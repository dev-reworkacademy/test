let express = require('express')
let app = express()
let port = 8000

app.get('/',(req,res)=>{
	res.json({name:"Ready made"})
})

app.get("/home",(req,res)=>{
	res.send("i   am home and okay")
})

app.listen(port)
