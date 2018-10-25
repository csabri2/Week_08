
//  Week 08 Express: More Complex Routing
//  Step 04

//  Import the express library
const express = require('express')
var bodyParser = require('body-parser')
var request = require('request');
request('https://swapi.co/api/planets/1', function (error, response, body) {
  if(!error && response.statusCode == 200) {
    console.log(body)
    var da = data
  }
})

//  Create an instance of express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/form.html')
})

app.post("/", (req, res) => {
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let message = "Hello, " + firstname + " " + lastname
  res.send(message)
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
