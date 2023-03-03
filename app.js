//jshint esversion: 6

const requireExpress = require("express")
const requireParser = require("body-parser")
const requireRequest = require("request")
const app = requireExpress()


app.get("/", function(req,res){
    
})

app.listen(3000, function(){
    console.log("server running port 3000")
})