let express = require('express')
let app = express()
let port = process.env.PORT || 8000

app.get('/',(req,res)=>{
	res.json({name:"Ready made"})
})

app.get("/home",(req,res)=>{
	res.send("i am home and okay")
})

app.get("/contact",(req,res)=>{
   res.send("summertide sunday at 6pm")
})

app.get("/about",(req,res)=>{
res.json("welcome to the about page")
})

app.listen(port)
console.log("App running on port:"+port)
