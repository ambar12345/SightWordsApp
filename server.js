//npm init (adds package.json)
//npm install express --save (creates node_modules)
//npm install mongodb --save
//npm install ejs --save
//npm install dotenv --save

var HTTP_PORT = process.env.PORT || 8000;
const express = require('express')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config() //will use the .env file that you have

const app = express()
const cors = require('cors')

let db, dbName = 'sight-words'

//remove later???
let dbConnectionString = 'mongodb+srv://ambaravalos1217:pGWlDabRzSy1tOh2@cluster0.qe4xxwz.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(dbConnectionString, { useUnifiedTopology: true })
 .then(client => {
   console.log(`connected to ${dbName} database`)
   db = client.db(dbName)
})

//APP BELOW

app.set('view engine', 'ejs')  //tell express were using ejs for templating
app.use(express.static('public'))  //set public folder

//replace body parser //allow us to pull stuff from the request object
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(HTTP_PORT, function(){
    console.log('app is running')
})

app.get("/", function(request, response){
    //response.sendFile(__dirname + '/index.html')
    db.collection('sight-words').find().toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})


