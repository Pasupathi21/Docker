const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.get('/', (req, res) => {
    try{
        const templatePath = `${__dirname}/view/index.html`
        res.sendFile(templatePath)
    }catch(error){

    }
})
app.listen(5500, () => {
    console.log('server up and running')
})