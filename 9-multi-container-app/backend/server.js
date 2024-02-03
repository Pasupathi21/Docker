const express = require('express')
const cors = require('cors')
require('dotenv').config()

const fs = require('fs')
const path = require('path')

const mongoose = require('mongoose')

// *************Model
const { Notes } = require('./model/Notes')

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use('/public', express.static('public'))

// ********** DB connection 
mongoose.connect(process.env.DB_CONNECTION).then(() => console.log('🟢 connection success')).catch(e => console.log('🔴 connection failed'))

function logFn(req, res, next){
    try {
        let data = `[${new Date().toLocaleDateString()}]: ${req.method}`
        fs.writeFileSync(path.join(__dirname, 'logs', `${Date.now()}.log`), data)
        next()
    } catch (e) {
        console.log('error', e)
    }

}

// **************** Controller
server.get('/', logFn, async (req, res) => {
    try {
        res.status(200).json({
            status: true,
            message: 'Welcome'
        })
    } catch (error) {
        res.status(500).json({
            status: true,
            message: 'Welcome'
        })
    }
})

server.get('/api/get-list', logFn, async (req, res) => {
    try {
        let payload = req.body
        console.log('/api/get-lis')
        const response = await Notes.find()
        res.json({
            status: true,
            response
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            status: false,
            message: error?.message
        })
    }
})
server.post('/api/create', logFn, async (req, res) => {
    try {
        let payload = req.body
        console.log('payload', payload)
        const response = await Notes.create(payload)
        res.json({
            status: true,
            response
        })
    } catch (error) {
        res.json({
            status: false,
            message: error?.message
        })
    }
})
server.put('/api/update/:id', logFn, (req, res) => {
    try {

    } catch (error) {

    }
})
server.delete('/api/delete/:id', logFn, async (req, res) => {
    try {
       let {id} = req.params
       await Notes.deleteOne({ _id: id })
       res.json({
        status: true,
        message: 'Deleted successfully'
       })
    } catch (error) {
      res.json({
        status: false,
        message: error?.message
      })
    }
})

const PORT = process.env.PORT || 5001
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

