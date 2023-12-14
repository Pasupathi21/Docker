const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'Request success'
    })
})

app.listen(1214, () => {
    console.log('PORT listen')
})