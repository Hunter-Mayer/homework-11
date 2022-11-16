const router = require('express').Router()
const fs = require('fs')
const util = require('util')

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
    console.log(userInput)
})

module.exports = router