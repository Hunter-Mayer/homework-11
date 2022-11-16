//Boilerplate Code for Server
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const apiRoutes = require('./api/index')
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'))


//API Routes (in api folder)
app.use('/api', apiRoutes)


//Client Routes
//home route
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public/index.html'))
})

//notes route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

//listening
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
