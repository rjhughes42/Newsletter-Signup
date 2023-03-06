//jshint esversion: 6

const express = require("express")
const body = require("body-parser")
const request = require("request")
const app = express()
const https = require("https")


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.use(body.urlencoded({extended:true}))
app.use(express.static("public"))

app.post("/", function(req,res){
    const email =  req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const data = {
        members:[
            {
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
    }
    const jsonData = JSON.stringify(data)
    const url = "https://us18.api.mailchimp.com/3.0/lists/bc81d2c761"
    const options = {
        method:"POST",
        auth:"jeff:a26fe1a13d6b0529e66a3d635cf18fc2-us18"
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end();
})



app.listen(3000, function(){
    console.log("server running port 3000")
})


// api: a26fe1a13d6b0529e66a3d635cf18fc2-us18

// unique id: bc81d2c761