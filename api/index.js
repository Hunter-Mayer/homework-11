const router = require('express').Router()
const fs = require('fs')
const util = require('util')
const db = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');



const readAsync = util.promisify(fs.readFile)
const writeAsync = util.promisify(fs.writeFile)
router.get('/notes', (req,res) => {
    readAsync('db/db.json', 'utf-8').then(data => {
        const allNotes = JSON.parse(data) 
        res.json(allNotes)
    })

})

router.post('/notes', (req,res) =>{
    const userInput = req.body
    //console.log(userInput)
    readAsync('db/db.json', 'utf-8').then(data =>{
        userInput.id = uuidv4()
        db.push(userInput)
        fs.writeFileSync('./db/db.json', JSON.stringify(db))
        res.json(db)
    })
})

router.delete('/notes/:id', (req, res) =>{
    const newDb = db.filter((userInput) =>
    userInput.id !== req.params.id)

    fs.writeFileSync('../db/db.json', JSON.stringify(newDb))

    readFile.json(newDb)
})

module.exports = router