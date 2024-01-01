const express = require('express')
const cors = require('cors')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use('/public', express.static('public'))


// **************** Controller
server.get('/', (req, res) => {
    try{
        res.status(200).json({
            status: true,
            message: 'Welcome'
        })
    }catch(error){
        res.status(500).json({
            status: true,
            message: 'Welcome'
        })
    }
})

server.get('/api/get-list', (req, res) => {
    try{

    }catch(error){

    }
})
server.post('/api/create', (req, res) => {
    try{

    }catch(error){
        
    }
})
server.put('/api/update/:id', (req, res) => {
    try{

    }catch(error){
        
    }
})
server.delete('/api/delte/:id', (req, res) => {
    try{

    }catch(error){
        
    }
})

const PORT = process.env.PORT || 5001
server.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`)
})

