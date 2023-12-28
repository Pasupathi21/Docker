const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('data'))

app.get('/form', (req, res) => {
    const htmlPath = path.join(__dirname, 'template', 'form.html')
    res.sendFile(htmlPath)
})

app.get('/add-comment', (req, res) => {
    const { filename, comment} = req.query
    const pathName = path.join(__dirname, 'data', `${filename}.txt`) 
    if(fs.existsSync(pathName)){
        return res.json({
            message: 'File already exist'
        })
    }
    fs.writeFile(pathName, comment, 'utf-8', (err) => {
        if(err) res.json({ message: 'something went wrong' })
        console.log('res', req.body)
        res.json({
            message: 'successfully added your commnet'
        })
    })
   
})

console.log('ENV VAR', process.env.TEST_ENV_VAR)
console.log('MULTI_ARG', process.env.MULTI_ARG)
app.listen(process.env.PORT, () => console.log('app up and running 🚀'))