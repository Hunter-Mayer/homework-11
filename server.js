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


//API Routes
app.use('/api', apiRoutes)
//Client Routes

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
