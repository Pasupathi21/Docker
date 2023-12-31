const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const axios = require('axios')

// ************** | Model | *************
const { Message } = require('./model/message')

console.log(process.env.DB)
// const DB_URL = 'mongodb://127.0.0.1:27017/docker-db'  ----> Normal local mongodb server connnection str
// const DB_URL = 'mongodb://host>docker.internal/docker-db' ---------> Docker provide the domain for accessing localhost from the container to local machine

/**
 * mongodb://<NETWORK_CONTAINER_NAME>/docker-db
 */
const DB_URL = 'mongodb://mongodb/docker-db'
mongoose.connect(DB_URL).then(() => console.log('DB connection success 🟢')).catch((e) => {
    console.log('error', e)
    console.log('DB connection failed 🔴')
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`publics`))

// ************* | Controll|
app.get('/', (req, res) => {
    let html = `
    <html>
        <body>
            <div style-"height: 100%; widht: 100%; display: flex; justify-content: center, align-items: center">
                <h4>Welcome !!!</h4>
            </div>
        </body>
    </html>
    `
    res.send(html)
})
app.get('/get-list', (req, res) => {
    try {
        res.json({
            status: true,
            data: []
        })
    } catch (e) {
        console.log('ERROR: ', e)
        res.json({
            status: false,
            message: 'Error'
        })
    }
})

app.get('/list-message', async (req, res) => {
    try {
        const response = await Message.find({})
        res.json({
            status: true,
            response
        })
    } catch (e) {
        console.log('ERROR: ', e)
        res.json({
            status: false,
            message: 'Error'
        })
    }
})

app.post('/post-message', async (req, res) => {
    try {
        const response = await Message.create(req.body)
        res.json({
            status: true,
            response
        })
    } catch (e) {
        console.log('ERROR: ', e)
        res.json({
            status: false,
            message: 'Error'
        })
    }
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})