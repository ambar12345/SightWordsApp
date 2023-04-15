var HTTP_PORT = process.env.PORT || 8000;
const express = require('express')

const app = express()

app.listen(HTTP_PORT, function(){
    console.log('app is running')
})

app.get("/", function(request, response){
    response.sendFile(__dirname + '/index.html')
})
