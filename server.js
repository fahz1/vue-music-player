const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//server files from our dist directory which now contains our index.html file
app.use(serveStatic(__dirname + '/dist'))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)
